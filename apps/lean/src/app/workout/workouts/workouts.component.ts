import { Component } from "@angular/core";
import { WorkoutInterface } from "@lean/api-interfaces";
import { WorkoutService } from "../workout.service";
import { Observable } from "rxjs";

@Component({
  selector: "lean-workout",
  templateUrl: "./workouts.component.html",
  styleUrls: ["./workouts.component.css"]
})
export class WorkoutsComponent {
  workouts$: Observable<WorkoutInterface[]> = new Observable<WorkoutInterface[]>(observer => {
    this.workoutService.findAll().subscribe(workouts => observer.next(workouts));
  });

  constructor(private workoutService: WorkoutService) {
  }
}
