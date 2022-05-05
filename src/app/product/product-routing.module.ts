import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProductComponent} from './list-product/list-product.component';
import {ProductCreateComponent} from './product-create/product-create.component';


const routes: Routes = [
  {
    path: '',
    component: ListProductComponent
  },
  {
    path: 'create',
    component: ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
