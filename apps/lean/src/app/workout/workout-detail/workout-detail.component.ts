import { Component, OnInit } from '@angular/core';
import { WorkoutInterface } from "@lean/api-interfaces";
import { WorkoutService } from "../workout.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'lean-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css'],
})
export class WorkoutDetailComponent implements OnInit {
  workout: WorkoutInterface;

  constructor(private workoutService: WorkoutService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.workoutService.findOne(id).subscribe(workout => this.workout = workout);
  }

  deleteWorkout(id: string) {
    this.workoutService.deleteWorkout(id).subscribe();
  }
}
