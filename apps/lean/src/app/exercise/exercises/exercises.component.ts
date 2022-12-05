/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component } from "@angular/core";
import { ExerciseInterface } from "@lean/api-interfaces";
import { ExerciseService } from "../exercise.service";
import { Observable } from "rxjs";

@Component({
  selector: "lean-exercise",
  templateUrl: "./exercises.component.html",
  styleUrls: ["./exercises.component.css"]
})
export class ExerciseComponent {
  exercises$: Observable<ExerciseInterface[]> = new Observable<ExerciseInterface[]>(observer => {
    this.service.getExercises().subscribe((exercises: ExerciseInterface[]) => observer.next(exercises));
  });

  constructor(private service: ExerciseService) {
  }
}
