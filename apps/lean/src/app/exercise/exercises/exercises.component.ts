/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from "@angular/core";
import { Exercise } from "@lean/api-interfaces";
import { FormGroup } from "@angular/forms";
import { ExerciseService } from "../exercise.service";

@Component({
  selector: "lean-exercise",
  templateUrl: "./exercises.component.html",
  styleUrls: ["./exercises.component.css"]
})
export class ExerciseComponent implements OnInit {
  exercises$: Exercise[] = [];

  constructor(private service: ExerciseService) {
  }

  ngOnInit(): void {
    this.service.getExercises().subscribe((exercises: Exercise[]) => this.exercises$ = exercises);
  }

  createExercise(exerciseForm: FormGroup): void {
    this.service.createExercise(exerciseForm.value).subscribe(() => {
      exerciseForm.reset();
    });
  }

  deleteExercise(exerciseId: string): void {
    this.service.deleteExercise(exerciseId).subscribe();
  }
}
