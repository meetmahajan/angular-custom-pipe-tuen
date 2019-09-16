import { Component } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Products } from './products';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  products;
  productInput;
  constructor(){    
  }
  ngOnInit(){
    this.products = Products;
  }
}
