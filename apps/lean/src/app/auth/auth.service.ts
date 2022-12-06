import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserInterface, UserCredentials, UserRegistration, IdentityInterface } from "@lean/api-interfaces";
import { BehaviorSubject, catchError, map, Observable, of } from "rxjs";
import { UserService } from "../user/user.service";
import { Location } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public currentUser$ = new BehaviorSubject<IdentityInterface | undefined>(undefined);
  private readonly CURRENT_USER = "currentUser";

  constructor(private http: HttpClient, private userService: UserService, private location: Location) {
    const currentUser = localStorage.getItem(this.CURRENT_USER);
    if (currentUser) {
      this.currentUser$.next(JSON.parse(currentUser));
    }
  }

  register(credentials: UserRegistration): Observable<UserInterface> {
    return this.http.post<UserInterface>("/api/register", credentials)
      .pipe(
        map((user) => {
          return user;
        }),
        catchError((err) => {
          throw err;
        })
      );
  }

  login(credentials: UserCredentials): Observable<IdentityInterface> {
    return this.http.post<IdentityInterface>("/api/login", credentials)
      .pipe(
        map((identity) => {
          localStorage.setItem(this.CURRENT_USER, JSON.stringify(identity));
          this.currentUser$.next(identity);
          return identity;
        }),
        catchError((err) => {
          throw err;
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.CURRENT_USER);
    this.currentUser$.next(undefined);
    this.location.go("/");
  }

  get currentUser(): Observable<UserInterface | undefined> {
    const currentUser = this.currentUser$.value;

    if (currentUser) {
      return this.userService.findOneByEmail(currentUser.email);
    }

    return of(undefined);
  }
}
