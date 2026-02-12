import { Component, Input } from "@angular/core";
import { ExerciseInterface } from "@lean/api-interfaces";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "lean-exercise-card",
  templateUrl: "./exercise-card.component.html",
  styleUrls: ["./exercise-card.component.css"],
  imports: [CommonModule, RouterLink]
})
export class ExerciseCardComponent {
  @Input()
  exercise: ExerciseInterface;
}
