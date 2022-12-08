import { Component } from "@angular/core";

import { GroupWorkoutService } from "../group-workout.service";
import { FormGroup } from "@angular/forms";
import { Location } from "@angular/common";

@Component({
  selector: "lean-add-group-workout",
  templateUrl: "./add-group-workout.component.html",
  styleUrls: ["./add-group-workout.component.css"]
})
export class AddGroupWorkoutComponent {
  constructor(private groupWorkoutService: GroupWorkoutService, private location: Location) {
  }

  addGroupWorkout(formGroup: FormGroup): void {
    this.groupWorkoutService.addGroupWorkout(formGroup.value).subscribe(() => {
      this.location.back();
    });
  }
}
