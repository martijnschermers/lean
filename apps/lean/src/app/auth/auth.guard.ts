import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.currentUser$.pipe(
      map((token) => {
        if (token) {
          return true;
        }

        return this.router.parseUrl("/login");
      })
    );
  }
}
