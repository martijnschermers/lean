/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from "@angular/core";
import { ExerciseInterface, WorkoutInterface } from "@lean/api-interfaces";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable, timer } from "rxjs";
import { ExerciseService } from "../../exercise/exercise.service";
import * as moment from "moment";

@Component({
  selector: "lean-add-workout",
  templateUrl: "./add-workout.component.html",
  styleUrls: ["./add-workout.component.css"]
})
export class AddWorkoutComponent implements OnInit {
  workout?: WorkoutInterface;
  workoutForm: FormGroup;
  duration: string;
  exercises$: Observable<ExerciseInterface[]> = new Observable<ExerciseInterface[]>(observer => {
    this.exerciseService.getAllExercises().subscribe(exercises => {
      observer.next(exercises);
    });
  })

  constructor(private formBuilder: FormBuilder, private exerciseService: ExerciseService) {
  }

  ngOnInit(): void {
    this.workoutForm = this.formBuilder.group({
      name: ["", Validators.required],
      sets: this.formBuilder.array([])
    });

    timer(0, 1000).subscribe(timer => {
      if (timer < 60) {
        this.duration = moment(timer * 1000).format("s") + " s";
      } else if (timer < 3600) {
        this.duration = moment(timer * 1000).format("m:ss") + " m";
      } else {
        this.duration = moment(timer * 1000).format("H:mm:ss") + " h";
      }
    });
  }

  createSet(): FormGroup {
    return this.formBuilder.group({
      exercise: ["", Validators.required],
      reps: [0, Validators.required],
      weight: [0, Validators.required],
      finished: [false, Validators.required]
    });
  }

  get sets() {
    return this.workoutForm.get("sets")! as FormArray;
  }

  addSet(): void {
    this.sets.push(this.createSet());
  }

  removeSet(index: number) {
    this.sets.removeAt(index);
  }

  saveWorkout(form: FormGroup) {
    //Calculate volume, duration, prs and add to object
    console.log("Workout: ", form.value);
  }
}
