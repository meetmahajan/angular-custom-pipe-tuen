import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FindProductPipe } from './find-product.pipe';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FindProductPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
