import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/types/Product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-layout-list',
  templateUrl: './admin-layout-list.component.html',
  styleUrls: ['./admin-layout-list.component.css']
})
export class AdminLayoutListComponent implements OnInit {
  products: Product[];

  constructor(
            private productService: ProductService,
            private toastr: ToastrService
          ) {
    this.products = [];
   }

  ngOnInit(): void {
    this.onGetListProducts();
  }

  onGetListProducts(){
    // VỚi kiểu trả về Observable thì có phương thức subscribe để lắng nghe
    // Bao giờ có kết quả thì thực thi tiếp
    this.productService.getProducts().subscribe((data: Product[]) =>{
      this.products = data
    })
  }

  onDelete(id:string){
    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa không?")
    if(confirmDelete && id){
      //Nếu có id thì call API xóa
      this.productService.deleteProduct(id).subscribe((data) =>{
        // cập nhật lại dữ liệu mới
        // console.log(data);
        this.toastr.success("Bạn đã xóa thành công sản phẩm");
        this.onGetListProducts();
      }) 

    }
  }

}
