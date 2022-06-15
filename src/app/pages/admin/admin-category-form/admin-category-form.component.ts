import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {
  categoryForm: FormGroup;
  categoryId: string;
  constructor(
    private categoryService: CategoryService, //cung cấp createProduct
    private router: Router, //cung cấp navigate điều hướng
    private activatedRoute: ActivatedRoute //Lấy ra các tham số trong url
  ) {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
    });
    this.categoryId = "";
   }

   ngOnInit(): void {
    this.categoryId = this.activatedRoute.snapshot.params["id"];
    // Nếu có mới lấy ra detail
    if (this.categoryId) {
      this.categoryService.getCategory(this.categoryId).subscribe(data => {
        //Gán giá trị cho form , patchValue sẽ nhận đầy đủ thông tin từ form
        this.categoryForm.patchValue({
          name: data.name,
        })
      });
    }
  }

  onSubmit() {
    // console.log(this.productForm.value);
    //1. Lấy dữ liệu từ form
    const submitData = this.categoryForm.value;

    // ---Kiểm tra để update--- 
    if (this.categoryId ) {
      return this.categoryService.UpdateCategory(this.categoryId, submitData).subscribe(data => {
        this.router.navigateByUrl("/admin/category");
      })
    }

    //2. call API
    return this.categoryService.createCategory(submitData).subscribe(data => {
      // 3 sau khi call API thành công quay về trang danh sách
      this.router.navigateByUrl('/admin/category');
    })
  }

}
