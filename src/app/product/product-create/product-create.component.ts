import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {NotificationService} from '../../service/notification/notification.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};

  constructor(private productService: ProductService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  createProduct(productForm) {
    if (productForm.valid) {
      this.productService.createProduct(productForm.value).subscribe(() => {
         this.notificationService.showMessage('success', 'Tạo mới thành công!')
        }, error => {
        this.notificationService.showMessage('error', 'Tạo mới lỗi!')
        }
      );
      productForm.resetForm();
    } else {
      this.notificationService.showMessage('error', 'Tạo mới lỗi!')
    }
  }
}
