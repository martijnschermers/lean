/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ExerciseInterface } from "@lean/api-interfaces";
import { ExerciseService } from "../exercise.service";
import { Location } from "@angular/common";
import { Observable } from "rxjs";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "lean-exercise-detail",
  templateUrl: "./exercise-detail.component.html",
  styleUrls: ["./exercise-detail.component.css"]
})
export class ExerciseDetailComponent {
  exercise$: Observable<ExerciseInterface> = new Observable<ExerciseInterface>(observer => {
    const id = this.route.snapshot.paramMap.get("id");

    this.exerciseService.getExercise(id).subscribe(exercise => observer.next(exercise));
  });

  user$ = this.authService.currentUser;

  constructor(private route: ActivatedRoute, private exerciseService: ExerciseService, private location: Location, private authService: AuthService) {
  }

  deleteExercise(exerciseId: string | undefined): void {
    this.exerciseService.deleteExercise(exerciseId!).subscribe(() => {
      this.location.back();
    });
  }
}
