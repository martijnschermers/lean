import { Component } from "@angular/core";
import { UserInterface } from "@lean/api-interfaces";
import { USERS } from "../mock-users";
import { UserService } from "../user.service";

@Component({
  selector: "lean-user",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent {
  users: UserInterface[] = USERS;
  user: UserInterface;

  constructor(private userService: UserService) {
  }

  addUser(): void {
    this.userService.addUser(this.user);
  }

  deleteUser(user: UserInterface): void {
    this.userService.deleteUser(user);
  }
}
