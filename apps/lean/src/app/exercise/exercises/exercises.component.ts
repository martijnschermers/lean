/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from "@angular/core";
import { Exercise } from "@lean/api-interfaces";
import { ExerciseMockService } from "../exercise-mock.service";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "lean-exercise",
  templateUrl: "./exercises.component.html",
  styleUrls: ["./exercises.component.css"]
})
export class ExerciseComponent implements OnInit {
  exercises$: Exercise[] = [];

  constructor(private service: ExerciseMockService) {
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
    this.service.deleteExercise(exerciseId).subscribe(() => {
      this.exercises$ = this.exercises$.filter(exercise => exercise._id !== exerciseId);
    });
  }
}
