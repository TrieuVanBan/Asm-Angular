import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductCreate } from '../types/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // tao ra 1 biến private http sử dụng với các phương thức sau đó call api
  constructor(private http:HttpClient) { }

  // Observable cung cấp kiểu xử lí bất đồng bộ về phía component lắng nghe dữ liệu
  getProducts(): Observable<Product[]> {
    // khi chờ kết quả thì kết quả trả về 1 mảng Category[]
    return this.http.get<Product[]>(environment.products)
  }

  getProduct(id: number|string): Observable<Product> {
    return this.http.get<Product>(`${environment.products}/${id}`)
  }

  deleteProduct(id: number|string): Observable<any> {
    return this.http.delete<Product>(`${environment.products}/${id}`)
  }

  // Dữ liệu gửi đi {name: string}, nhận về 
  createProduct(data : ProductCreate): Observable<Product> {
    return this.http.post<Product>(`${environment.products}`, data)
  }

  UpdateProduct(id : number|string, data : ProductCreate): Observable<Product> {
    return this.http.put<Product>(`${environment.products}/${id}`, data)
  }
}
