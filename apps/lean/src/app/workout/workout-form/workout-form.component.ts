/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ExerciseInterface, WorkoutInterface } from "@lean/api-interfaces";
import { ExerciseService } from "../../exercise/exercise.service";
import { Observable, timer } from "rxjs";
import * as moment from "moment";
import { CommonModule } from "@angular/common";

@Component({
  selector: "lean-workout-form",
  templateUrl: "./workout-form.component.html",
  styleUrls: ["./workout-form.component.css"],
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class WorkoutFormComponent implements OnInit {
  @Input()
  workout: WorkoutInterface;

  @Output()
  workoutEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  workoutForm!: FormGroup;
  update = false;
  duration?: string;
  exercises$: Observable<ExerciseInterface[]> = new Observable<ExerciseInterface[]>(observer => {
    this.exerciseService.getExercises().subscribe(exercises => {
      observer.next(exercises);
    });
  });

  constructor(private formBuilder: FormBuilder, private exerciseService: ExerciseService) {
  }

  ngOnInit(): void {
    if (this.workout) {
      this.update = true;
      this.workoutForm = this.formBuilder.group({
        name: [this.workout.name, Validators.required]
      });
    } else {
      this.workout = { _id: "", volume: 0, prs: 0, name: "", sets: [], duration: "", date: new Date() };

      this.workoutForm = this.formBuilder.group({
        name: ["", Validators.required],
        exercises: this.formBuilder.array([], Validators.required)
      });

      timer(0, 1000).subscribe(timer => {
        this.duration = moment(timer * 1000).format("H:mm:ss");
      });
    }
  }

  createExercise(exercise: ExerciseInterface): FormGroup {
    return this.formBuilder.group({
      id: [{ value: exercise._id, disabled: true }],
      name: [{ value: exercise.name, disabled: true }],
      sets: this.formBuilder.array([
        this.createSet(exercise._id)
      ], Validators.required)
    });
  }

  createSet(exerciseId: string): FormGroup {
    return this.formBuilder.group({
      _id: [exerciseId],
      reps: [0, Validators.required],
      weight: [0, Validators.required],
      finished: [false, Validators.required]
    });
  }

  get exercises(): FormArray {
    return this.workoutForm.get("exercises")! as FormArray;
  }

  getSets(index: number): FormArray {
    return this.exercises.at(index).get("sets")! as FormArray;
  }

  addExercise(exercise: ExerciseInterface): void {
    this.exercises.push(this.createExercise(exercise));
  }

  addSet(index: number, exerciseId: string): void {
    this.getSets(index).push(this.createSet(exerciseId));
  }

  deleteSet(exerciseIndex: number, setIndex: number): void {
    if (this.getSets(exerciseIndex).length == 1) {
      this.exercises.removeAt(exerciseIndex);
      return;
    }

    this.getSets(exerciseIndex).removeAt(setIndex);
  }

  onSubmit(): void {
    if (this.workoutForm.invalid) {
      return;
    }

    if (!this.update) {
      this.workoutForm.value.date = new Date();
      this.workoutForm.value.duration = this.duration;
    }

    this.workoutEvent.emit(this.workoutForm);
  }
}
