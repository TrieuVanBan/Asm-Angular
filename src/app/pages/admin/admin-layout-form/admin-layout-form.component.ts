import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-layout-form',
  templateUrl: './admin-layout-form.component.html',
  styleUrls: ['./admin-layout-form.component.css']
})
export class AdminLayoutFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;

  constructor(
    private productService: ProductService, //cung cấp createProduct
    private router: Router, //cung cấp navigate điều hướng
    private activatedRoute: ActivatedRoute, //Lấy ra các tham số trong url
    private toastr: ToastrService
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ]),
      price: new FormControl(0, [
        Validators.required,
      ]),
      image: new FormControl("", [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
    });
    this.productId = "";
  }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params["id"];
    // Nếu có mới lấy ra detail
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {
        //Gán giá trị cho form , patchValue sẽ nhận đầy đủ thông tin từ form
        this.productForm.patchValue({
          name: data.name,
          price: data.price,
          image: data.image,
          description: data.description,
        })
      });
    }
  }

  onSubmit() {
    // console.log(this.productForm.value);
    //1. Lấy dữ liệu từ form
    const submitData = this.productForm.value;

    // ---Kiểm tra để update--- 
    if (this.productId ) {
      return this.productService.UpdateProduct(this.productId, submitData).subscribe(data => {
        this.toastr.success("Bạn đã sửa thành công sản phẩm");
        this.router.navigateByUrl("/admin/products");
      })
    }
    


    //2. call API
    return this.productService.createProduct(submitData).subscribe(data => {
      // 3 sau khi call API thành công quay về trang danh sách
      this.toastr.success("Bạn đã thêm thành công sản phẩm");
      this.router.navigateByUrl('/admin/products');
    })
  }

}
