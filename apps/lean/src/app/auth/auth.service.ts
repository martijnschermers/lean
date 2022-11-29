import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserInterface, UserCredentials, UserRegistration } from "@lean/api-interfaces";
import { BehaviorSubject, catchError, map, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public currentUser$ = new BehaviorSubject<{ token: string } | undefined>(undefined);
  private readonly CURRENT_USER = "currentUser";

  constructor(private http: HttpClient) {
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

  login(credentials: UserCredentials): Observable<{ token: string }> {
    return this.http.post<{ token: string }>("/api/login", credentials)
      .pipe(
        map((token) => {
          localStorage.setItem(this.CURRENT_USER, JSON.stringify(token));
          this.currentUser$.next(token);
          return token;
        }),
        catchError((err) => {
          throw err;
        })
      );
  }

  logout() {
    localStorage.removeItem(this.CURRENT_USER);
    this.currentUser$.next(undefined);
  }
}
