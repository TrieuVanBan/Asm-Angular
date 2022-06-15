import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/types/Category';
import { Product, ProductCreate } from 'src/app/types/Product';
import { ProductService } from '../../service/product.service';
import { CategoryService } from 'src/app/service/category.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[];
  categories: Category[];
  constructor(private productService:ProductService, private categoryService:CategoryService) {
    this.products = [],
    this.categories = []
   }

  ngOnInit(): void {
    this.onGetListProducts();
    this.onGetListCate();
  }

  onGetListProducts(){
    // VỚi kiểu trả về Observable thì có phương thức subscribe để lắng nghe
    // Bao giờ có kết quả thì thực thi tiếp
    this.productService.getProducts().subscribe((data: Product[]) =>{
      this.products = data
    })
  }

  onGetListCate(){
    this.categoryService.getCategorys().subscribe((data: Category[]) =>{
      this.categories = data
    })
  }

}
