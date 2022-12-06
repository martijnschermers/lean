/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SetInterface, WorkoutInterface } from "@lean/api-interfaces";

@Injectable({
  providedIn: "root"
})
export class WorkoutService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<WorkoutInterface[]> {
    return this.http.get<WorkoutInterface[]>("/api/workout");
  }

  findOne(id: string | null): Observable<WorkoutInterface> {
    return this.http.get<WorkoutInterface>(`/api/workout/${id}`);
  }

  addWorkout(workout: WorkoutInterface): Observable<WorkoutInterface> {
    const sets: SetInterface[] = [];

    workout.exercises!.forEach(exercise => {
      exercise.sets!.forEach(set => {
        const newSet: SetInterface = {
          exerciseId: set._id,
          reps: set.reps,
          weight: set.weight,
          finished: set.finished
        };
        sets.push(newSet);
      });
    });
    workout.sets = sets;
    delete workout.exercises;

    return this.http.post<WorkoutInterface>("/api/workout", workout);
  }

  updateWorkout(workout: WorkoutInterface): Observable<WorkoutInterface> {
    return this.http.put<WorkoutInterface>(`/api/workout/${workout._id}`, workout);
  }

  deleteWorkout(id: string): Observable<WorkoutInterface> {
    return this.http.delete<WorkoutInterface>(`/api/workout/${id}`);
  }
}
