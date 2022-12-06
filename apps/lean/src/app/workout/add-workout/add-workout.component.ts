/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from "@angular/core";
import { ExerciseInterface, WorkoutInterface } from "@lean/api-interfaces";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { Observable, timer } from "rxjs";
import { ExerciseService } from "../../exercise/exercise.service";
import { WorkoutService } from "../workout.service";
import * as moment from "moment";

@Component({
  selector: "lean-add-workout",
  templateUrl: "./add-workout.component.html",
  styleUrls: ["./add-workout.component.css"]
})
export class AddWorkoutComponent implements OnInit {
  workout: WorkoutInterface = { _id: "", volume: 0, prs: 0, name: "", sets: [], duration: "", date: new Date() };
  workoutForm: FormGroup;
  duration: string;
  exercises$: Observable<ExerciseInterface[]> = new Observable<ExerciseInterface[]>(observer => {
    this.exerciseService.getExercises().subscribe(exercises => {
      observer.next(exercises);
    });
  });

  constructor(private formBuilder: FormBuilder, private workoutService: WorkoutService, private exerciseService: ExerciseService, private location: Location) {
  }

  ngOnInit(): void {
    this.workoutForm = this.formBuilder.group({
      name: ["", Validators.required],
      exercises: this.formBuilder.array([], Validators.required)
    });

    timer(0, 1000).subscribe(timer => {
      this.duration = moment(timer * 1000).format("H:mm:ss");
    });
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

  addWorkout(form: FormGroup): void {
    form.value.duration = this.duration;
    form.value.date = new Date();

    this.workoutService.addWorkout(form.value).subscribe(() => {
      this.location.back();
    });
  }
}
