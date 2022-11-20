import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "@lean/api-interfaces";
import { UserService } from "../user.service";
import { Location } from "@angular/common";

@Component({
  selector: "lean-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  @Input()
  user: User;

  constructor(private route: ActivatedRoute, private userService: UserService, private location: Location) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if (id != null) {
      this.userService.getUser(id).subscribe((user) => (this.user = user));
      return;
    }

    return;
  }

  updateUser(): void {
    this.userService.updateUser(this.user);
    this.location.back();
  }
}
