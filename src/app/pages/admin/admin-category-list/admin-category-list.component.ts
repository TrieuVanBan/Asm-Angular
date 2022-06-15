import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/types/Category';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
  category: Category[];
  constructor(private categoryService: CategoryService) { 
    this.category = [];
  }

  ngOnInit(): void {
    this.onGetListCategory();
  }

  onGetListCategory(){
    // VỚi kiểu trả về Observable thì có phương thức subscribe để lắng nghe
    // Bao giờ có kết quả thì thực thi tiếp
    this.categoryService.getCategorys().subscribe((data: Category[]) =>{
      this.category = data
    })
  }

  onDelete(id:string){
    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa không?")
    if(confirmDelete && id){
      //Nếu có id thì call API xóa
      this.categoryService.deleteCategory(id).subscribe((data) =>{
        // cập nhật lại dữ liệu mới
        console.log(data);
        this.onGetListCategory();
      }) 

    }
  }

}
