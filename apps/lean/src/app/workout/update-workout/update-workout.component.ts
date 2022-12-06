import { Component, OnInit } from "@angular/core";
import { WorkoutInterface } from "@lean/api-interfaces";
import { WorkoutService } from "../workout.service";
import { FormGroup } from "@angular/forms";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "lean-update-workout",
  templateUrl: "./update-workout.component.html",
  styleUrls: ["./update-workout.component.css"]
})
export class UpdateWorkoutComponent implements OnInit{
  workout: WorkoutInterface | undefined;

  constructor(private workoutService: WorkoutService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.workoutService.findOne(id).subscribe(workout => {
      this.workout = workout;
    });
  }

  updateWorkout(workoutForm: FormGroup): void {
    this.workoutService.updateWorkout(workoutForm.value).subscribe(() => {
      this.location.back();
    });
  }
}
