import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent, LoginComponent, RegisterComponent } from './form/auth/containers';
import { DefaultLayoutComponent } from './form/layouts/default-layout';
import { SuppliersManageComponent } from './form/suppliers-manage/suppliers-manage.component';
import { CategoryManageComponent } from './form/category-manage/category-manage.component';

const routes: Routes = [

  {
    path: '', component: DefaultLayoutComponent,
    data: {
      breadcrumb: 'Home'
    }, children: [
      {
        path: 'import-supplier', component: SuppliersManageComponent,
        data: {
          breadcrumb: 'Quản lý nhà cung cấp'
        },
      },
      {
        path: 'category', component: CategoryManageComponent,
        data: {
          breadcrumb: 'Quản lý danh mục'
        },
      },

    ]
  },
  {
    path: 'auth',
    data: {
      breadcrumb: 'Quản lý tài khoản'
    },
    children: [
      {
        path: 'register', component: RegisterComponent, data: {
          breadcrumb: 'Đăng ký'
        },
      },
      {
        path: 'login', component: LoginComponent, data: {
          breadcrumb: 'Đăng nhập'
        },
      },
      {
        path: 'forgot-password', component: ForgotPasswordComponent,
        data: {
          breadcrumb: 'Quên mật khẩu'
        },
      }
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
