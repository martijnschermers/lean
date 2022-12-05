import { Component } from "@angular/core";
import { UserInterface } from "@lean/api-interfaces";

@Component({
  selector: "lean-user",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent {
  users: UserInterface[] = [];
  user: UserInterface;
}
