import { Component, Input, OnInit } from "@angular/core";
import { WorkoutInterface } from "@lean/api-interfaces";
import * as moment from "moment";

@Component({
  selector: "lean-workout-card",
  templateUrl: "./workout-card.component.html",
  styleUrls: ["./workout-card.component.css"]
})
export class WorkoutCardComponent implements OnInit {
  @Input()
  workout: WorkoutInterface;
  date: string;

  ngOnInit() {
    this.date = moment(this.workout.date).format("MM/DD/YYYY");
  }
}
