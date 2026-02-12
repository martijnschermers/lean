import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { BehaviorSubject } from "rxjs";
import { IdentityInterface } from "@lean/api-interfaces";
import { CommonModule } from "@angular/common";
import { RouterLinkWithHref, RouterLink } from "@angular/router";
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "lean-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  imports: [CommonModule, RouterLinkWithHref, RouterLink, IconComponent]
})
export class NavbarComponent implements OnInit {
  loggedInUser$: BehaviorSubject<IdentityInterface | undefined> = new BehaviorSubject<IdentityInterface | undefined>(undefined);

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.loggedInUser$ = this.authService.currentUser$;
  }

  logout(): void {
    this.authService.logout();
  }
}
