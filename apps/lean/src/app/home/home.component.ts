import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { WorkoutService } from "../workout/workout.service";
import { Observable } from "rxjs";
import { WorkoutInterface } from "@lean/api-interfaces";

@Component({
  selector: "lean-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  currentUser$ = this.authService.currentUser$.value;
  recommendedWorkouts$: Observable<WorkoutInterface[]> = new Observable<WorkoutInterface[]>(observer => {
    this.workoutService.findRecommendedWorkouts().subscribe(workouts => {
      observer.next(workouts);
    });
  });

  constructor(private authService: AuthService, private workoutService: WorkoutService) {
  }
}
