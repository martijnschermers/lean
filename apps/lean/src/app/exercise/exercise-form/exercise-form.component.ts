/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, inject, input, output } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { ExerciseInterface, ExerciseCategory, ExerciseType, Muscle } from "@lean/api-interfaces";
import { AuthService } from "../../auth/auth.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "lean-exercise-form",
  templateUrl: "./exercise-form.component.html",
  styleUrls: ["./exercise-form.component.css"],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true
})
export class ExerciseFormComponent {
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);

  title = input.required<string>();
  exercise = input<ExerciseInterface>();
  exerciseEvent = output<FormGroup>();

  exerciseForm!: FormGroup;
  exerciseTypes = Object.values(ExerciseType);
  exerciseCategories = Object.values(ExerciseCategory);
  muscles = Object.values(Muscle);

  user$ = this.authService.currentUser;

  constructor() {
    this.initializeForm();
  }

  private initializeForm(): void {
    const exerciseValue = this.exercise();
    if (exerciseValue) {
      this.exerciseForm = this.formBuilder.group({
        name: [exerciseValue.name, Validators.required],
        description: [exerciseValue.description, Validators.required],
        type: [exerciseValue.type, Validators.required],
        category: [exerciseValue.category, Validators.required],
        predefined: [exerciseValue.predefined, Validators.required],
        primaryMuscle: [exerciseValue.primaryMuscle, Validators.required],
        image: [exerciseValue.image ? exerciseValue.image : "", Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g)]
      });
    } else {
      this.exerciseForm = this.formBuilder.group({
        name: ["", Validators.required],
        description: ["", Validators.required],
        type: [this.exerciseTypes[0], Validators.required],
        category: [this.exerciseCategories[0], Validators.required],
        predefined: [false, Validators.required],
        primaryMuscle: [this.muscles[0], Validators.required],
        image: ["", Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g)]
      });
    }
  }

  get name() {
    return this.exerciseForm.get("name")!;
  }

  get description() {
    return this.exerciseForm.get("description")!;
  }

  get image() {
    return this.exerciseForm.get("image")!;
  }

  onSubmit(): void {
    if (this.exerciseForm.invalid) {
      return;
    }

    this.exerciseEvent.emit(this.exerciseForm);
  }
}
