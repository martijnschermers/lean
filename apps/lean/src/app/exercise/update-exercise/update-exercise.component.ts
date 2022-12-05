import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ExerciseService } from "../exercise.service";
import { Location } from "@angular/common";
import { ExerciseInterface, UserInterface } from "@lean/api-interfaces";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "lean-update-exercise",
  templateUrl: "./update-exercise.component.html",
  styleUrls: ["./update-exercise.component.css"]
})
export class UpdateExerciseComponent implements OnInit {
  exercise: ExerciseInterface | undefined;

  constructor(private service: ExerciseService, private location: Location, private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getExercise();
  }

  getExercise(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.getExercise(id).subscribe(exercise => {
      let user: UserInterface | undefined;
      this.authService.currentUser.subscribe((currentUser) => user = currentUser);
      if (!user) {
        this.location.go("/login");
      }

      if (exercise.predefined && !user?.admin) {
        this.location.back();
      }

      this.exercise = exercise;
    });
  }

  updateExercise(exerciseForm: FormGroup): void {
    this.service.updateExercise(this.exercise?._id, exerciseForm.value).subscribe(() => {
      this.location.back();
    });
  }
}
