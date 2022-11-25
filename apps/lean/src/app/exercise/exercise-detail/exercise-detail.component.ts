import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ExerciseService } from "../exercise.service";
import { Exercise } from "@lean/api-interfaces";

@Component({
  selector: 'lean-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css'],
})
export class ExerciseDetailComponent implements OnInit {
  exercise: Exercise;

  constructor(private route: ActivatedRoute, private exerciseService: ExerciseService) {
  }

  ngOnInit(): void {
    this.getExercise();
  }

  getExercise(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.exerciseService.getExercise(id).subscribe(exercise => this.exercise = exercise);
  }
}
