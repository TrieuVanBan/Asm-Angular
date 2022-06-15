import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLogin, TypeLoginResponse, UserCreate } from '../types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }

  // Observable cung cấp kiểu xử lí bất đồng bộ về phía component lắng nghe dữ liệu
  getUsers(): Observable<any[]> {
    // khi chờ kết quả thì kết quả trả về 1 mảng Category[]
    return this.http.get<any[]>("http://localhost:5000/api/users")
  }

  getUser(id: number|string): Observable<TypeLogin> {
    return this.http.get<TypeLogin>(`${environment.login}/${id}`)
  }

  deleteUser(id: number|string): Observable<any> {
    return this.http.delete<TypeLogin>(`${environment.login}/${id}`)
  }

  // Dữ liệu gửi đi {name: string}, nhận về 
  createUser(data : UserCreate): Observable<TypeLogin> {
    return this.http.post<TypeLogin>(`${environment.login}`, data)
  }

  UpdateUser(id : number|string, data : UserCreate): Observable<TypeLogin> {
    return this.http.put<TypeLogin>(`${environment.login}/${id}`, data)
  }

  login(data :TypeLogin): Observable<TypeLoginResponse>{
    return this.http.post<TypeLoginResponse>(`${environment.login}`, data)
  }
}
