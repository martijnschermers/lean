import { Component, OnInit } from '@angular/core';
import { WorkoutInterface } from "@lean/api-interfaces";
import { WorkoutService } from "../workout.service";

@Component({
  selector: 'lean-workout',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
})
export class WorkoutsComponent implements OnInit {
  workouts$: WorkoutInterface[];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.workoutService.findAll().subscribe(workouts => this.workouts$ = workouts);
  }
}
