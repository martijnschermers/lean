import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Workout } from "@lean/api-interfaces";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Workout[]> {
    return this.http.get<Workout[]>('/api/workout');
  }
}
