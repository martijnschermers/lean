import { Component, Input } from "@angular/core";
import { ExerciseInterface } from "@lean/api-interfaces";

@Component({
  selector: "lean-exercise-card",
  templateUrl: "./exercise-card.component.html",
  styleUrls: ["./exercise-card.component.css"]
})
export class ExerciseCardComponent {
  @Input()
  exercise: ExerciseInterface;
}
