import { Component, OnInit } from '@angular/core';
import { User } from '@lean/api-interfaces';
import { USERS } from '../mock-users';
import { UserService } from '../user.service';

@Component({
  selector: 'lean-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = USERS;
  user: User = new User();

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  addUser(): void {
    this.userService.addUser(this.user);
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user);
  }
}
