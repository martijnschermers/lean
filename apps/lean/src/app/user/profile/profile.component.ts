import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserInterface } from "@lean/api-interfaces";
import { Observable } from "rxjs";
import { AuthService } from "../../auth/auth.service";
import { CommonModule } from "@angular/common";
import { IconComponent } from "../../components/icon/icon.component";

@Component({
  selector: "lean-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
  imports: [CommonModule, IconComponent]
})
export class ProfileComponent {
  @Input()
  user$: Observable<UserInterface | undefined> = new Observable<UserInterface | undefined>(observer => {
    this.authService.currentUser.subscribe((user) => observer.next(user));
  });

  constructor(private route: ActivatedRoute, private authService: AuthService) {
  }

  logout(): void {
    this.authService.logout();
  }
}
