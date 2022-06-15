import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor(private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //1. Lay thong tin nguoi dung da dang nhap
      const loggedInUser = localStorage.getItem('loggedInUser')
      // 2. kiem tra neu co thi vao admin
    if(loggedInUser){
      return true;
    }
    // 3. neu khong co thi ve man hinh login
    this.router.navigateByUrl("/auth/login");
    return false;
  }
  
}
