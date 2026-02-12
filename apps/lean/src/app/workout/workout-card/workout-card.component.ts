import { Component, Input, OnInit } from "@angular/core";
import { WorkoutInterface } from "@lean/api-interfaces";
import { RouterLink, RouterLinkWithHref } from "@angular/router";
import * as moment from "moment";
import { CommonModule } from "@angular/common";

@Component({
  selector: "lean-workout-card",
  templateUrl: "./workout-card.component.html",
  styleUrls: ["./workout-card.component.css"],
  imports: [RouterLink, RouterLinkWithHref, CommonModule]
})
export class WorkoutCardComponent implements OnInit {
  @Input()
  workout: WorkoutInterface;
  date: string;

  ngOnInit() {
    this.date = moment(this.workout.date).format("MM/DD/YYYY");
  }
}
