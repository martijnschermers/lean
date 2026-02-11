import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { UserInterface } from "@lean/api-interfaces";
import { UserService } from "../user.service";
import { ActivatedRoute } from "@angular/router";
import { Location, CommonModule } from "@angular/common";
import { IconComponent } from "../../components/icon/icon.component";

@Component({
  selector: "lean-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"],
  imports: [CommonModule, IconComponent]
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
