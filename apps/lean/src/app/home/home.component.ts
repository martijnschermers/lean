import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { WorkoutService } from "../workout/workout.service";
import { Observable } from "rxjs";
import { WorkoutInterface } from "@lean/api-interfaces";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { WorkoutCardComponent } from "../workout/workout-card/workout-card.component";

@Component({
  selector: "lean-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  imports: [CommonModule, RouterLink, WorkoutCardComponent]
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
