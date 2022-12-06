import { Component } from "@angular/core";
import { GroupWorkoutInterface } from "@lean/api-interfaces";
import { Observable } from "rxjs";
import { GroupWorkoutService } from "../group-workout.service";

@Component({
  selector: "lean-group-workouts",
  templateUrl: "./group-workouts.component.html",
  styleUrls: ["./group-workouts.component.css"]
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
