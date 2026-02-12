import { Component } from "@angular/core";
import { GroupWorkoutInterface } from "@lean/api-interfaces";
import { Observable } from "rxjs";
import { GroupWorkoutService } from "../group-workout.service";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { GroupWorkoutCardComponent } from "../group-workout-card/group-workout-card.component";

@Component({
  selector: "lean-group-workouts",
  templateUrl: "./group-workouts.component.html",
  styleUrls: ["./group-workouts.component.css"],
  imports: [CommonModule, RouterLink, GroupWorkoutCardComponent]
})
export class GroupWorkoutsComponent {
  groupWorkouts$: Observable<GroupWorkoutInterface[]> = new Observable<GroupWorkoutInterface[]>(observer => {
    this.groupWorkoutService.findAll().subscribe(groupWorkouts => {
      observer.next(groupWorkouts);
    });
  });

  constructor(private groupWorkoutService: GroupWorkoutService) {
  }
}
