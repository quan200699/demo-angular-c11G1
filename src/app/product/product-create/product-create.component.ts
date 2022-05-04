import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {NotificationService} from '../../service/notification/notification.service';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    category: null
  };
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private notificationService: NotificationService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.categories = listCategory;
    });
  }

  createProduct(productForm) {
    if (productForm.valid) {
      let product = productForm.value;
      product.category = {
        id: product.category
      }
      this.productService.createProduct(product).subscribe(() => {
          this.notificationService.showMessage('success', 'Tạo mới thành công!');
        }, error => {
          this.notificationService.showMessage('error', 'Tạo mới lỗi!');
        }
      );
      productForm.resetForm();
    } else {
      this.notificationService.showMessage('error', 'Tạo mới lỗi!');
    }
  }
}
