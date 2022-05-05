import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product/product.service';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    description: new FormControl('')
  });

  constructor(private productService: ProductService,
              private notificationService: NotificationService) {
  }

  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

  get description() {
    return this.productForm.get('description');
  }

  ngOnInit() {
  }

  createProduct() {
    if (this.productForm.valid) {
      this.productService.createProduct(this.productForm.value).subscribe(() => {
        this.notificationService.showMessage('success', 'Tạo thành công!')
      }, error => {
        this.notificationService.showMessage('error', 'Tạo lỗi!')
      });
    }else {
      this.notificationService.showMessage('error', 'Tạo lỗi!')
    }
  }

}
