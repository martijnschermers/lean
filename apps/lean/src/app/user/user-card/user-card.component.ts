import { Component, Input } from "@angular/core";
import { UserInterface } from "@lean/api-interfaces";
import { UserService } from "../user.service";

@Component({
  selector: "lean-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.css"]
})
export class UserCardComponent {
  @Input()
  user: UserInterface;

  constructor(private userService: UserService) {}

  follow(): void {
    this.userService.follow(this.user._id).subscribe();
  }
}
