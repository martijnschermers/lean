import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from "./user.service";

@NgModule({
  declarations: [UsersComponent, UserDetailComponent, UserFormComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [UserService]
})
export class UserModule {}
