/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Location, CommonModule } from "@angular/common";
import { WorkoutService } from "../workout.service";
import { WorkoutFormComponent } from "../workout-form/workout-form.component";

@Component({
  selector: "lean-add-workout",
  templateUrl: "./add-workout.component.html",
  styleUrls: ["./add-workout.component.css"],
  imports: [CommonModule, WorkoutFormComponent]
})
export class AddWorkoutComponent {

  constructor(private workoutService: WorkoutService, private location: Location) {
  }

  addWorkout(form: FormGroup): void {
    this.workoutService.addWorkout(form.value).subscribe(() => {
      this.location.back();
    });
  }
}
