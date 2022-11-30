/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from "@angular/core";
import { ExerciseInterface } from "@lean/api-interfaces";
import { ExerciseService } from "../exercise.service";

@Component({
  selector: "lean-exercise",
  templateUrl: "./exercises.component.html",
  styleUrls: ["./exercises.component.css"]
})
export class ExerciseComponent implements OnInit {
  customExercises$: ExerciseInterface[] = [];
  predefinedExercises$: ExerciseInterface[] = [];

  constructor(private service: ExerciseService) {
  }

  ngOnInit(): void {
    this.getExercises();
  }

  getExercises(): void {
    this.service.getCustomExercises().subscribe((exercises: ExerciseInterface[]) => this.customExercises$ = exercises);
    this.service.getPredefinedExercises().subscribe((exercises: ExerciseInterface[]) => this.predefinedExercises$ = exercises);
  }

  deleteExercise(exerciseId: string): void {
    this.service.deleteExercise(exerciseId).subscribe(() => {
      this.getExercises();
    });
  }
}
