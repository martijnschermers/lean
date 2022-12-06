import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GroupWorkoutInterface } from "@lean/api-interfaces";

@Injectable({
  providedIn: 'root'
})
export class GroupWorkoutService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<GroupWorkoutInterface[]> {
    return this.http.get<GroupWorkoutInterface[]>('/api/group-workout');
  }
}
