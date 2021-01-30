import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { NewProductComponent } from './components/new-product/new-product.component';


@NgModule({
  declarations: [NewProductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
