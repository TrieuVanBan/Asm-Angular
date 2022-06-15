import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ProductService } from 'src/app/service/product.service';
import { Product, ProductCart } from 'src/app/types/Product';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  //1. lay ra duoc id tren url
  id:string;
  //2. su dung id do de call API lay chi tiet product
  product:Product;

  // Dinh nghia bien lang nghe gia tri cho value gio hang
  cartValue: number;

  constructor(
      private activatedRoute: ActivatedRoute, //Dung de lay du lieu tham so tren URL
      private productService: ProductService ,//Dung de lay cac phuong thuc call API product 
      private lsService: LocalStorageService, // dung de lay cac phuong thuc xu li localStorage
      private toastr: ToastrService
    ) { 
    this.id = "";
    this.product = {
      _id: "",
      name: "",
      price: 0,
      image: "",
      description: "",
    }

    
    this.cartValue = 1
  }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.params['id']
    this.productService.getProduct(this.id).subscribe(data => {
      this.product = data;
      console.log(data);
      
    })
    
  }

  onChangeCartValue(event: any){
    this.cartValue = event.target.value
  }

  onAddToCart(){
    //Dinh nghia 1 san pham trong gio hang co cau truc la gi
    const addItem = {
      ...this.product,
      value: +this.cartValue,
      
    };
    // Neu thuc hien theo cach cu thi component cart se khong lang nghe duoc

    // thuc hien goi lsService de component cart de lang nghe thay doi
    this.lsService.setItem(addItem)
    
     this.cartValue = 1;

     this.toastr.success("Bạn đã thêm thành công");    
  }

}
