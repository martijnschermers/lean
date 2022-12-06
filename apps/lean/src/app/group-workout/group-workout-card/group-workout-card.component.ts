import { Component, Input } from "@angular/core";
import { GroupWorkoutInterface } from "@lean/api-interfaces";

@Component({
  selector: "lean-group-workout-card",
  templateUrl: "./group-workout-card.component.html",
  styleUrls: ["./group-workout-card.component.css"]
})
export class GroupWorkoutCardComponent {
  @Input()
  groupWorkout: GroupWorkoutInterface;
}
