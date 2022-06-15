import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ShopComponent } from './components/shop/shop.component';
import { HomeComponent } from './components/home/home.component';
// Thư viện sử dụng Form
import { FormsModule } from '@angular/forms';
// thư viện ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';

// phương thức sử dụng gọi API
import { HttpClientModule } from '@angular/common/http';

import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { AdminLayoutListComponent } from './pages/admin/admin-layout-list/admin-layout-list.component';
import { AdminLayoutFormComponent } from './pages/admin/admin-layout-form/admin-layout-form.component';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category-form/admin-category-form.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category-list/admin-category-list.component';
import { AdminUserFormComponent } from './pages/admin/admin-user-form/admin-user-form.component';
import { AdminUserListComponent } from './pages/admin/admin-user-list/admin-user-list.component';
import { CartComponent } from './components/cart/cart.component';

// toast
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminCartComponent } from './pages/admin/admin-cart/admin-cart.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    ShopComponent,
    HomeComponent,
    ProductDetailComponent,
    AdminLayoutListComponent,
    AdminLayoutFormComponent,
    ShowValidateComponent,
    LoginComponent,
    AdminCategoryFormComponent,
    AdminCategoryListComponent,
    AdminUserFormComponent,
    AdminUserListComponent,
    CartComponent,
    AdminCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
