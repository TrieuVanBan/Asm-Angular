import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, CategoryCreate } from '../types/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // tao ra 1 biến private http sử dụng với các phương thức sau đó call API
  constructor(private http:HttpClient) { }
  
  // Observable cung cấp kiểu xử lí bất đồng bộ về phía component lắng nghe dữ liệu
  getCategorys(): Observable<Category[]> {
    // khi chờ kết quả thì kết quả trả về 1 mảng Category[]
    return this.http.get<Category[]>(environment.categories)
  }

  getCategory(id: number|string): Observable<Category> {
    return this.http.get<Category>(`${environment.categories}/${id}`)
  }

  deleteCategory(id: number|string): Observable<any> {
    return this.http.delete<Category>(`${environment.categories}/${id}`)
  }

  // Dữ liệu gửi đi {name: string}, nhận về 
  createCategory(data : CategoryCreate): Observable<Category> {
    return this.http.post<Category>(`${environment.categories}`, data)
  }

  UpdateCategory(id : number|string, data : CategoryCreate): Observable<Category> {
    return this.http.put<Category>(`${environment.categories}/${id}`, data)
  }
}
