import { Component } from "@angular/core";
import { UserInterface } from "@lean/api-interfaces";
import { UserService } from "../user.service";

@Component({
  selector: "lean-user",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent {
  users: UserInterface[] = [];
  user: UserInterface;

  constructor(private userService: UserService) {
  }
}
