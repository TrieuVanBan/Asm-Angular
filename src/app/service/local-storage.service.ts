import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductCart } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // 1. lang nghe thay doi  bang cach khoi tao 1 subjec
  // trong subjct se co phuong thuc bat su kien thay doi de phat hanh dong tiep theo
  private storageSubject = new Subject<string>();

  watchStorage():Observable<any>{
    return this.storageSubject.asObservable();
  }

  getItem(){
    return JSON.parse(localStorage.getItem('cart') || '[]')
  }

  // Tat ca cac xu li cua localStorage se thuc hien o day, de kich hoat lang nghe
  setItem(addItem:ProductCart){
    // Nghiep cu them vao gio hang
    // 1. lay ra tona bo san pham trong gio hang
    const cartItems =  this.getItem();
    console.log(cartItems);
    // 2. kiem tra trong gio da co id giong cartItem chua
    const existItem = cartItems.find((item: ProductCart) =>
     item._id == addItem._id);   
     if (!existItem){
        cartItems.push(addItem);
     } else {
      existItem.value = existItem.value + addItem.value;
     }

     localStorage.setItem('cart', JSON.stringify(cartItems));
    //  Sau khi them san pham vao gio bang phuong thuc setItem nayf
     this.storageSubject.next('');
    //  thi watchStorage se duoc phat su kien vao subscribe
  }
}
