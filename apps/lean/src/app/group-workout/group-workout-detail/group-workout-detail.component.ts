import { Component } from "@angular/core";
import { GroupWorkoutService } from "../group-workout.service";
import { Observable } from "rxjs";
import { GroupWorkoutInterface } from "@lean/api-interfaces";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "lean-group-workout-detail",
  templateUrl: "./group-workout-detail.component.html",
  styleUrls: ["./group-workout-detail.component.css"]
})
export class GroupWorkoutDetailComponent {
  groupWorkout$: Observable<GroupWorkoutInterface> = new Observable<GroupWorkoutInterface>(observer => {
    const id = this.route.snapshot.paramMap.get("id");
    this.groupWorkoutService.findOne(id).subscribe((groupWorkout) => observer.next(groupWorkout));
  });

  constructor(private groupWorkoutService: GroupWorkoutService, private route: ActivatedRoute) {
  }

  joinGroupWorkout(groupWorkout: GroupWorkoutInterface): void {
    this.groupWorkoutService.joinGroupWorkout(groupWorkout).subscribe();
  }
}
