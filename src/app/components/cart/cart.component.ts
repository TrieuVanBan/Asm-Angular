import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ProductCart } from 'src/app/types/Product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: ProductCart[];
  constructor(private lsService: LocalStorageService, private toastr: ToastrService) { 
    this.cartItems = [];
  }

  ngOnInit(): void {
    this.onSetCart();
    // khi setItem duoc chay thi next cung duoc chay
    this.lsService.watchStorage().subscribe(data => {

    })
  }



  onSetCart(){
    
    this.cartItems = this.lsService.getItem();
    
  }
  

  

}
