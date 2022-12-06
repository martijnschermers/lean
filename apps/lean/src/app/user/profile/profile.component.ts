import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserInterface } from "@lean/api-interfaces";
import { Observable } from "rxjs";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "lean-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent {
  @Input()
  user$: Observable<UserInterface> = new Observable<UserInterface>(observer => {
    this.authService.currentUser.subscribe((user) => observer.next(user));
  });

  constructor(private route: ActivatedRoute, private authService: AuthService) {
  }

  logout(): void {
    this.authService.logout();
  }
}
