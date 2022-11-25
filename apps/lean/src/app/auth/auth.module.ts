import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLinkWithHref } from '@angular/router';
import { httpInterceptorProviders } from './auth.interceptor';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, FormsModule, RouterLinkWithHref, ReactiveFormsModule],
  providers: [httpInterceptorProviders],
})
export class AuthModule {}
