/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ExerciseInterface, ExerciseCategory, ExerciseType, Muscle } from "@lean/api-interfaces";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "lean-exercise-form",
  templateUrl: "./exercise-form.component.html",
  styleUrls: ["./exercise-form.component.css"]
})
export class ExerciseFormComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  exercise?: ExerciseInterface;

  @Output()
  exerciseEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  exerciseForm!: FormGroup;
  exerciseTypes = Object.values(ExerciseType);
  exerciseCategories = Object.values(ExerciseCategory);
  muscles = Object.values(Muscle);

  user$ = this.authService.currentUser;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.exercise) {
      this.exerciseForm = this.formBuilder.group({
        name: [this.exercise.name, Validators.required],
        description: [this.exercise.description, Validators.required],
        type: [this.exercise.type, Validators.required],
        category: [this.exercise.category, Validators.required],
        predefined: [this.exercise.predefined, Validators.required],
        primaryMuscle: [this.exercise.primaryMuscle, Validators.required],
        image: [this.exercise.image ? this.exercise.image : "", Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g)]
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
