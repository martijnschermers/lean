import { Component, OnInit } from '@angular/core';
import { Workout } from "@lean/api-interfaces";
import { WorkoutService } from "../workout.service";

@Component({
  selector: 'lean-workout',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
})
export class WorkoutsComponent implements OnInit {
  workouts$: Workout[];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.workoutService.findAll().subscribe(workouts => this.workouts$ = workouts);
  }
}
