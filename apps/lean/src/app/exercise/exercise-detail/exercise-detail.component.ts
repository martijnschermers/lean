/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ExerciseInterface } from "@lean/api-interfaces";
import { ExerciseService } from "../exercise.service";
import { Location } from "@angular/common";

@Component({
  selector: "lean-exercise-detail",
  templateUrl: "./exercise-detail.component.html",
  styleUrls: ["./exercise-detail.component.css"]
})
export class ExerciseDetailComponent implements OnInit {
  exercise$: ExerciseInterface | undefined;

  constructor(private route: ActivatedRoute, private exerciseService: ExerciseService, private location: Location) {
  }

  ngOnInit(): void {
    this.getExercise();
  }

  getExercise(): void {
    const id = this.route.snapshot.paramMap.get("id");
    const custom = this.route.snapshot.url[1].path == "custom";

    if (custom) {
      this.exerciseService.getCustomExercise(id).subscribe(exercise => this.exercise$ = exercise);
    } else {
      this.exerciseService.getExercise(id).subscribe(exercise => this.exercise$ = exercise);
    }
  }

  deleteExercise(exerciseId: string | undefined): void {
    this.exerciseService.deleteExercise(exerciseId!).subscribe(() => {
      this.location.back();
    });
  }
}
