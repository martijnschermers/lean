/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from "@angular/core";
import { ExerciseService } from "../exercise.service";
import { Exercise, ExerciseCategory, ExerciseType, Muscle } from "@lean/api-interfaces";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "lean-exercise",
  templateUrl: "./exercises.component.html",
  styleUrls: ["./exercises.component.css"]
})
export class ExerciseComponent implements OnInit {
  exercises$: Exercise[] = [];
  exerciseForm!: FormGroup;
  exerciseTypes = Object.values(ExerciseType);
  exerciseCategories = Object.values(ExerciseCategory);
  muscles = Object.values(Muscle);

  constructor(private service: ExerciseService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.service.getExercises().subscribe((exercises: Exercise[]) => this.exercises$ = exercises);

    this.exerciseForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      type: [this.exerciseTypes[0], Validators.required],
      category: [this.exerciseCategories[0], Validators.required],
      primaryMuscle: [this.muscles[0], Validators.required],
      image: [""]
    });
  }

  get name() {
    return this.exerciseForm.get("name")!;
  }

  get description() {
    return this.exerciseForm.get("description")!;
  }

  createExercise(): void {
    if (this.exerciseForm.invalid) {
      return;
    }

    this.service.createExercise(this.exerciseForm.value).subscribe((exercise: Exercise) => {
      this.exercises$.push(exercise);
      this.exerciseForm.reset();
    });
  }
}
