import { Injectable } from "@angular/core";
import { UserInterface } from "@lean/api-interfaces";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  findOne(id: string | null): Observable<UserInterface> {
    return this.http.get<UserInterface>(`/api/user/${id}`);
  }

  findOneByEmail(email: string): Observable<UserInterface> {
    return this.http.get<UserInterface>(`/api/user/?email=${email}`);
  }
}
