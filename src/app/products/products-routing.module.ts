import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductRequestedComponent } from './components/product-requested/product-requested.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewProductComponent
  },
  {
    path: 'requested',
    component: ProductRequestedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
