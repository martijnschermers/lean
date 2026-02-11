/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ExerciseInterface } from "@lean/api-interfaces";
import { ExerciseService } from "../exercise.service";
import { CommonModule, Location } from "@angular/common";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "lean-exercise-detail",
  templateUrl: "./exercise-detail.component.html",
  styleUrls: ["./exercise-detail.component.css"],
  imports: [CommonModule, RouterLink],
  standalone: true
})
export class ExerciseDetailComponent {
  private route = inject(ActivatedRoute);
  private exerciseService = inject(ExerciseService);
  private location = inject(Location);
  private authService = inject(AuthService);

  exercise$: Observable<ExerciseInterface> = this.route.paramMap.pipe(
    switchMap(paramMap => this.exerciseService.getExercise(paramMap.get("id")))
  );

  user$ = this.authService.currentUser;

  deleteExercise(exerciseId: string | undefined): void {
    this.exerciseService.deleteExercise(exerciseId!).subscribe(() => {
      this.location.back();
    });
  }
}
