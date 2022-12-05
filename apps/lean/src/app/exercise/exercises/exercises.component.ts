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
  exercises$: ExerciseInterface[] = [];

  constructor(private service: ExerciseService) {
  }

  ngOnInit(): void {
    this.getExercises();
  }

  getExercises(): void {
    this.service.getExercises().subscribe((exercises: ExerciseInterface[]) => this.exercises$ = exercises);
  }
}
