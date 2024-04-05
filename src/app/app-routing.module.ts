import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { ProFormComponent } from './shared/component/products/pro-form/pro-form.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { UsersComponent } from './shared/component/users/users.component';
import { UserFormComponent } from './shared/component/users/user-form/user-form.component';
import { UserComponent } from './shared/component/users/user/user.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'products', component: ProductsComponent,
    children: [
      {
        path: 'add-form', component: ProFormComponent
      },
      {
        path: ':pro-id', component: ProductComponent
      },
      {
        path: ':pro-id/edit', component: ProFormComponent
      }
    ]
  
  },
  {
    path:'users',component:UsersComponent,
    children:[
  
    {
      path:'add-form',component:UserFormComponent
    },
  
    {
      path:':userid',component:UserComponent
    },
    {
      path:':userid/edit',component:UserFormComponent
    }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
