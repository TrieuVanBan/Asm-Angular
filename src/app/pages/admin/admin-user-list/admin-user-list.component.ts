import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TypeLogin } from 'src/app/types/auth';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users: TypeLogin[];

  constructor(private authService: AuthService) {
    this.users = [];
   }

  ngOnInit(): void {
    this.onGetListUsers();
  }

  onGetListUsers(){
    // VỚi kiểu trả về Observable thì có phương thức subscribe để lắng nghe
    // Bao giờ có kết quả thì thực thi tiếp
    this.authService.getUsers().subscribe((data: TypeLogin[]) =>{
      this.users = data
    })
  }

  onDelete(id:string){
    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa không?")
    if(confirmDelete && id){
      //Nếu có id thì call API xóa
      this.authService.deleteUser(id).subscribe((data) =>{
        // cập nhật lại dữ liệu mới
        console.log(data);
        this.onGetListUsers();
      }) 

    }
  }

}
