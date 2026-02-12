import { Component } from "@angular/core";
import { WorkoutInterface } from "@lean/api-interfaces";
import { WorkoutService } from "../workout.service";
import { WorkoutCardComponent } from "../workout-card/workout-card.component";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "lean-workout",
  templateUrl: "./workouts.component.html",
  styleUrls: ["./workouts.component.css"],
  imports: [CommonModule, WorkoutCardComponent, RouterLink]
})
export class WorkoutsComponent {
  workouts$: Observable<WorkoutInterface[]> = new Observable<WorkoutInterface[]>(observer => {
    this.workoutService.findAll().subscribe(workouts => observer.next(workouts));
  });

  constructor(private workoutService: WorkoutService) {
  }
}
