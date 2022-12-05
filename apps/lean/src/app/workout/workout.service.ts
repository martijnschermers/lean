/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SetInterface, WorkoutInterface } from "@lean/api-interfaces";
import { ExerciseService } from "../exercise/exercise.service";

@Injectable({
  providedIn: "root"
})
export class WorkoutService {

  constructor(private http: HttpClient, private exerciseService: ExerciseService) {
  }

  findAll(): Observable<WorkoutInterface[]> {
    return this.http.get<WorkoutInterface[]>("/api/workout");
  }

  findOne(id: string | null): Observable<WorkoutInterface> {
    return this.http.get<WorkoutInterface>(`/api/workout/${id}`);
  }

  addWorkout(workout: WorkoutInterface): Observable<WorkoutInterface> {
    const sets: SetInterface[] = [];

    workout.sets!.forEach(async set => {
      await this.exerciseService.getExercise(set.exercise!._id).subscribe((exercise) => {
        const newSet: SetInterface = {
          _id: set._id,
          exercise,
          reps: set.reps,
          weight: set.weight,
          finished: set.finished
        };

        sets.push(newSet);
      });
    });
    workout.sets = sets;
    workout.volume = this.calculateVolume(workout.sets!);

    console.log(workout);
    return this.http.post<WorkoutInterface>("/api/workout", workout);
  }

  private calculateVolume(sets: SetInterface[]) {
    let volume = 0;
    sets.forEach(set => {
      volume += set.reps * set.weight;
    });
    return volume;
  }
}
