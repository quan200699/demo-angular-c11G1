import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = {};
  categories: Category[] = [];

  productForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    price: new FormControl('', [Validators.required]),
    category: new FormControl(null),
    description: new FormControl('', Validators.required)
  });

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private router: Router) {
    //router => đối tượng giúp chuyển trang bên phía ts
    //ActivatedRoute => để lấy giá trị của biến trên đường dẫn
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getProductById(id);
    });
  }

  get idControl() {
    return this.productForm.get('id');
  }

  get categoryControl() {
    return this.productForm.get('category');
  }

  get nameControl() {
    return this.productForm.get('name');
  }

  get priceControl() {
    return this.productForm.get('price');
  }

  get descriptionControl() {
    return this.productForm.get('description');
  }

  getAllCategory(){
    this.categoryService.getAllCategory().subscribe(listCategory => this.categories = listCategory);
  }

  getProductById(id) {
    this.productService.getProductById(id).subscribe(productBE => {
      this.product = productBE;
      this.idControl.setValue(this.product.id);
      this.nameControl.setValue(this.product.name);
      this.priceControl.setValue(this.product.price);
      this.descriptionControl.setValue(this.product.description);
      this.categoryControl.setValue(this.product.category.id);
    });
  }

  ngOnInit() {
    this.getAllCategory();
  }

  submit() {
    this.productService.editProduct(this.product.id, this.productForm.value);
    this.router.navigateByUrl('/products');
  }
}
