import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ExerciseService } from "../exercise.service";
import { Location } from "@angular/common";

@Component({
  selector: "lean-add-exercise",
  templateUrl: "./add-exercise.component.html",
  styleUrls: ["./add-exercise.component.css"]
})
export class AddExerciseComponent {
  constructor(private service: ExerciseService, private location: Location) {
  }

  addExercise(exerciseForm: FormGroup): void {
    this.service.addExercise(exerciseForm.value).subscribe(() => {
      this.location.back();
    });
  }
}
