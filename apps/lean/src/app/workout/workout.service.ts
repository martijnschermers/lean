import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SetInterface, WorkoutInterface } from "@lean/api-interfaces";

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

  addWorkout(workout: WorkoutInterface): Observable<WorkoutInterface> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    workout.volume = this.calculateVolume(workout.sets!);
    console.log(workout);
    return this.http.post<WorkoutInterface>('/api/workout', workout);
  }

  private calculateVolume(sets: SetInterface[]) {
    let volume = 0;
    sets.forEach(set => {
      volume += set.reps * set.weight;
    });
    return volume;
  }
}
