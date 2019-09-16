import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './products';

@Pipe({
  name: 'findProduct'
})
export class FindProductPipe implements PipeTransform {

  transform(products: Products, productInput: any): any {
    return products.filter(elem => elem.toString().toLowerCase().indexOf(productInput.toString().toLowerCase()) !== -1);
  }
}