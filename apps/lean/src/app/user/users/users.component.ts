import { Component } from "@angular/core";
import { UserInterface } from "@lean/api-interfaces";
import { Observable } from "rxjs";
import { UserService } from "../user.service";

@Component({
  selector: "lean-user",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent {
  users$: Observable<UserInterface[]> = new Observable<UserInterface[]>(observer => {
    this.userService.findAll().subscribe(users => {
      observer.next(users);
    });
  });

  constructor(private userService: UserService) {}
}
