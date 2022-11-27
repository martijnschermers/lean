import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Exercise } from "@lean/api-interfaces";
import { EXERCISES } from "./mock-exercises";

@Injectable({
  providedIn: "root"
})
export class ExerciseMockService {
  getExercises(): Observable<Exercise[]> {
    return of(EXERCISES);
  }

  getExercise(id: string | null): Observable<Exercise> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return of(EXERCISES.find(exercise => exercise._id === id)!);
  }

  createExercise(value: Exercise): Observable<Exercise> {
    value._id = EXERCISES.length + 1 + "";
    EXERCISES.push(value);
    return of(value);
  }

  updateExercise(exercise: Exercise): Observable<Exercise> {
    const index = EXERCISES.findIndex(e => e._id === exercise._id);
    EXERCISES[index] = exercise;
    return of(exercise);
  }

  deleteExercise(exerciseId: string): Observable<Exercise> {
    const index = EXERCISES.findIndex(exercise => exercise._id === exerciseId);
    const exercise = EXERCISES[index];
    EXERCISES.splice(index, 1);
    return of(exercise);
  }
}
