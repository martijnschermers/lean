import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms"; 

@NgModule({
  declarations: [UsersComponent, UserDetailComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class UsersModule {}
