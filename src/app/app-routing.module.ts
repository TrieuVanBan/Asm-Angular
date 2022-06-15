import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanAccessAdminGuard } from './can-access-admin.guard';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminCartComponent } from './pages/admin/admin-cart/admin-cart.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category-form/admin-category-form.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category-list/admin-category-list.component';
import { AdminLayoutFormComponent } from './pages/admin/admin-layout-form/admin-layout-form.component';
import { AdminLayoutListComponent } from './pages/admin/admin-layout-list/admin-layout-list.component';
import { AdminUserFormComponent } from './pages/admin/admin-user-form/admin-user-form.component';
import { AdminUserListComponent } from './pages/admin/admin-user-list/admin-user-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'shop',
        component: ShopComponent,
      },
      {
        path: 'shop/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'cart',
        component: AdminCartComponent,
      },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate : [CanAccessAdminGuard], //Khong login thi khong vao duoc admin
    children: [
      {
        path: 'products',
        component: AdminLayoutListComponent,
      },
      {
        path: 'products/create',
        component: AdminLayoutFormComponent,
      },
      {
        path: 'products/edit/:id',
        component: AdminLayoutFormComponent,
      },
      {
        path: 'category',
        component: AdminCategoryListComponent,
      },
      {
        path: 'category/create',
        component: AdminCategoryFormComponent,
      },
      {
        path: 'category/edit/:id',
        component: AdminCategoryFormComponent,
      },
      {
        path: 'user',
        component: AdminUserListComponent,
      },
      {
        path: 'user/create',
        component: AdminUserFormComponent,
      },
      {
        path: 'user/edit/:id',
        component: AdminUserFormComponent,
      },
      
    ]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [CanAccessAdminGuard] //Dua vao de cac route ben tren co  the su dung
})
export class AppRoutingModule { }
