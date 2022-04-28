import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  createProduct(productForm) {
    if (productForm.valid) {
      this.productService.createProduct(productForm.value).subscribe(() => {
        alert('Thành công!');
      }, error => console.log(error));
      productForm.resetForm();
    } else {
      alert('Xảy ra lỗi!');
    }
  }
}
