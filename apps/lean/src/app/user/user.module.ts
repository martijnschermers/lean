import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user.service';
import { ComponentsModule } from '../components/components.module';
import { UserCardComponent } from './user-card/user-card.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    UsersComponent,
    ProfileComponent,
    UserFormComponent,
    UserCardComponent,
    UserDetailComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ComponentsModule],
  providers: [UserService],
})
export class UserModule {}
