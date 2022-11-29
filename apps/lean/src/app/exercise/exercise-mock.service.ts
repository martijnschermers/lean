import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ExerciseInterface } from "@lean/api-interfaces";
import { EXERCISES } from "./mock-exercises";

@Injectable({
  providedIn: "root"
})
export class ExerciseMockService {
  getExercises(): Observable<ExerciseInterface[]> {
    return of(EXERCISES);
  }

  getExercise(id: string | null): Observable<ExerciseInterface> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return of(EXERCISES.find(exercise => exercise._id === id)!);
  }

  createExercise(value: ExerciseInterface): Observable<ExerciseInterface> {
    value._id = EXERCISES.length + 1 + "";
    EXERCISES.push(value);
    return of(value);
  }

  updateExercise(exercise: ExerciseInterface): Observable<ExerciseInterface> {
    const index = EXERCISES.findIndex(e => e._id === exercise._id);
    EXERCISES[index] = exercise;
    return of(exercise);
  }

  deleteExercise(exerciseId: string): Observable<ExerciseInterface> {
    const index = EXERCISES.findIndex(exercise => exercise._id === exerciseId);
    const exercise = EXERCISES[index];
    EXERCISES.splice(index, 1);
    return of(exercise);
  }
}
