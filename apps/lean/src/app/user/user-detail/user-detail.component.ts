import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { UserInterface } from "@lean/api-interfaces";
import { UserService } from "../user.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "lean-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent {
  user$: Observable<UserInterface> = new Observable<UserInterface>(observer => {
    const id = this.route.snapshot.paramMap.get("id");
    this.userService.findOne(id).subscribe((user) => observer.next(user));
  });

  constructor(private userService: UserService, private route: ActivatedRoute, private location: Location) {
  }

  follow(id: string): void {
    this.userService.follow(id).subscribe(() => {
      this.location.back();
    });
  }
}
