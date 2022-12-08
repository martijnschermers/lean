/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { ExerciseInterface, GroupWorkoutInterface } from "@lean/api-interfaces";
import { ExerciseService } from "../../exercise/exercise.service";

@Component({
  selector: "lean-group-workout-form",
  templateUrl: "./group-workout-form.component.html",
  styleUrls: ["./group-workout-form.component.css"]
})
export class GroupWorkoutFormComponent implements OnInit {
  @Input()
  groupWorkout: GroupWorkoutInterface;

  @Output()
  groupWorkoutEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  groupWorkoutForm!: FormGroup;
  update = false;
  exercises$: Observable<ExerciseInterface[]> = new Observable<ExerciseInterface[]>(observer => {
    this.exerciseService.getExercises().subscribe(exercises => {
      observer.next(exercises);
    });
  });

  constructor(private formBuilder: FormBuilder, private exerciseService: ExerciseService) {
  }

  ngOnInit(): void {
    if (this.groupWorkout) {
      this.update = true;
      this.groupWorkoutForm = this.formBuilder.group({
        name: [this.groupWorkout.name, Validators.required],
        location: [this.groupWorkout.location, Validators.required],
        date: [this.groupWorkout.date, Validators.required],
        duration: [this.groupWorkout.duration, Validators.required],
        exercises: this.formBuilder.array([], Validators.required)
      });
    } else {
      this.groupWorkout = { _id: "", location: "", name: "", exercises: [], duration: "", date: new Date() };

      this.groupWorkoutForm = this.formBuilder.group({
        name: ["", Validators.required],
        location: ["", Validators.required],
        date: [new Date(), Validators.required],
        duration: ["", Validators.required],
        exercises: this.formBuilder.array([], Validators.required)
      });
    }
  }

  createExercise(exercise: ExerciseInterface): FormGroup {
    return this.formBuilder.group({
      id: [{ value: exercise._id, disabled: true }],
      name: [{ value: exercise.name, disabled: true }]
    });
  }

  get exercises(): FormArray {
    return this.groupWorkoutForm.get("exercises")! as FormArray;
  }

  addExercise(exercise: ExerciseInterface): void {
    this.exercises.push(this.createExercise(exercise));
  }

  onSubmit(): void {
    if (this.groupWorkoutForm.invalid) {
      return;
    }

    this.groupWorkoutEvent.emit(this.groupWorkoutForm);
  }

}
