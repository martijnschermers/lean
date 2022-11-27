/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Exercise, ExerciseCategory, ExerciseType, Muscle } from "@lean/api-interfaces";

@Component({
  selector: "lean-exercise-form",
  templateUrl: "./exercise-form.component.html",
  styleUrls: ["./exercise-form.component.css"]
})
export class ExerciseFormComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  exercise?: Exercise;

  @Output()
  exerciseEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  exerciseForm!: FormGroup;
  exerciseTypes = Object.values(ExerciseType);
  exerciseCategories = Object.values(ExerciseCategory);
  muscles = Object.values(Muscle);

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    if (this.exercise) {
      this.exerciseForm = this.formBuilder.group({
        name: [this.exercise.name, Validators.required],
        description: [this.exercise.description, Validators.required],
        type: [this.exercise.type, Validators.required],
        category: [this.exercise.category, Validators.required],
        primaryMuscle: [this.exercise.primaryMuscle, Validators.required],
        image: [this.exercise.image ? this.exercise.image : ""]
      });
    } else {
      this.exerciseForm = this.formBuilder.group({
        name: ["", Validators.required],
        description: ["", Validators.required],
        type: [this.exerciseTypes[0], Validators.required],
        category: [this.exerciseCategories[0], Validators.required],
        primaryMuscle: [this.muscles[0], Validators.required],
        image: [""]
      });
    }
  }

  get name() {
    return this.exerciseForm.get("name")!;
  }

  get description() {
    return this.exerciseForm.get("description")!;
  }

  onSubmit(): void {
    if (this.exerciseForm.invalid) {
      return;
    }

    this.exerciseEvent.emit(this.exerciseForm);
  }
}
