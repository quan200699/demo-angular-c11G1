import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ListProductComponent, ProductCreateComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
