import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.currentUser$.pipe(
      map((token) => {
        if (token) {
          this.http.post("api/verify", `Bearer ${token.token}`)
            .pipe(
              map((res) => {
                if (res) {
                  return true;
                }
                return this.router.parseUrl("/login");
              })
            )
            .subscribe();
        }

        return this.router.parseUrl("/login");
      })
    );
  }
}
