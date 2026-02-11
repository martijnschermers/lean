import { Component } from "@angular/core";

import { GroupWorkoutService } from "../group-workout.service";
import { FormGroup } from "@angular/forms";
import { Location, CommonModule } from "@angular/common";
import { GroupWorkoutFormComponent } from "../group-workout-form/group-workout-form.component";

@Component({
  selector: "lean-add-group-workout",
  templateUrl: "./add-group-workout.component.html",
  styleUrls: ["./add-group-workout.component.css"],
  imports: [CommonModule, GroupWorkoutFormComponent]
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
