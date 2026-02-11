/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component } from "@angular/core";
import { ExerciseInterface } from "@lean/api-interfaces";
import { ExerciseService } from "../exercise.service";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { ExerciseCardComponent } from "../exercise-card/exercise-card.component";

@Component({
  selector: "lean-exercise",
  templateUrl: "./exercises.component.html",
  styleUrls: ["./exercises.component.css"],
  imports: [CommonModule, RouterLink, ExerciseCardComponent]
})
export class ExerciseComponent {
  exercises$: Observable<ExerciseInterface[]> = new Observable<ExerciseInterface[]>(observer => {
    this.service.getExercises().subscribe((exercises: ExerciseInterface[]) => observer.next(exercises));
  });

  constructor(private service: ExerciseService) {
  }
}
