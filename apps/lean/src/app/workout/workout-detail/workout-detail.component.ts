import { Component } from "@angular/core";
import { WorkoutInterface } from "@lean/api-interfaces";
import { WorkoutService } from "../workout.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Location } from "@angular/common";

@Component({
  selector: "lean-workout-detail",
  templateUrl: "./workout-detail.component.html",
  styleUrls: ["./workout-detail.component.css"]
})
export class WorkoutDetailComponent {
  workout$: Observable<WorkoutInterface> = new Observable<WorkoutInterface>(observer => {
    const id = this.route.snapshot.paramMap.get("id");
    this.workoutService.findOne(id).subscribe(workout => {
      observer.next(workout);
    });
  });

  constructor(private workoutService: WorkoutService, private route: ActivatedRoute, private location: Location) {
  }

  deleteWorkout(id: string) {
    this.workoutService.deleteWorkout(id).subscribe(() => {
      this.location.back();
    });
  }
}
