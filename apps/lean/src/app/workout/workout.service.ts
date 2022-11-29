import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { WorkoutInterface } from "@lean/api-interfaces";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<WorkoutInterface[]> {
    return this.http.get<WorkoutInterface[]>('/api/workout');
  }

  findOne(id: string | null): Observable<WorkoutInterface> {
    return this.http.get<WorkoutInterface>(`/api/workout/${id}`);
  }
}
