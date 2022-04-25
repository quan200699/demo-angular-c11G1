import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 12',
      price: 120000,
      description: 'new'
    },
    {
      id: 2,
      name: 'IPhone 13',
      price: 230000,
      description: 'new'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
