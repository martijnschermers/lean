import { Component, Input } from "@angular/core";
import { GroupWorkoutInterface } from "@lean/api-interfaces";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "lean-group-workout-card",
  templateUrl: "./group-workout-card.component.html",
  styleUrls: ["./group-workout-card.component.css"],
  imports: [CommonModule, RouterLink]
})
export class GroupWorkoutCardComponent {
  @Input()
  groupWorkout: GroupWorkoutInterface;
}
