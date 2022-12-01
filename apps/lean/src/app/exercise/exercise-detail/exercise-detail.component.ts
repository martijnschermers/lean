/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ExerciseInterface } from "@lean/api-interfaces";
import { ExerciseService } from "../exercise.service";
import { Location } from "@angular/common";
import { Observable } from "rxjs";

@Component({
  selector: "lean-exercise-detail",
  templateUrl: "./exercise-detail.component.html",
  styleUrls: ["./exercise-detail.component.css"]
})
export class ExerciseDetailComponent {
  exercise$: Observable<ExerciseInterface> = new Observable<ExerciseInterface>(observer => {
    const id = this.route.snapshot.paramMap.get("id");
    const custom = this.route.snapshot.url[1].path == "custom";

    if (custom) {
      this.exerciseService.getCustomExercise(id).subscribe(exercise => {
        if (!exercise) {
          this.location.back();
        }

        observer.next(exercise);
      });
    } else {
      this.exerciseService.getExercise(id).subscribe(exercise => observer.next(exercise));
    }
  });

  constructor(private route: ActivatedRoute, private exerciseService: ExerciseService, private location: Location) {
  }

  deleteExercise(exerciseId: string | undefined): void {
    this.exerciseService.deleteExercise(exerciseId!).subscribe(() => {
      this.location.back();
    });
  }
}
