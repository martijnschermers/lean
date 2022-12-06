import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from "./user.service";
import { ComponentsModule } from "../components/components.module";

@NgModule({
  declarations: [UsersComponent, ProfileComponent, UserFormComponent],
  imports: [CommonModule, RouterModule, FormsModule, ComponentsModule],
  providers: [UserService]
})
export class UserModule {}
