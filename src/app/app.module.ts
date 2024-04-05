import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './shared/component/home/home.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { ProFormComponent } from './shared/component/products/pro-form/pro-form.component';
import { UsersComponent } from './shared/component/users/users.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { UserFormComponent } from './shared/component/users/user-form/user-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    ProFormComponent,
    UsersComponent,
    UserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
