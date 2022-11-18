import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Exercise } from "@lean/api-interfaces";

@Component({
  selector: 'lean-exercise',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
})
export class ExerciseComponent implements OnInit {
  exercises$: Exercise[] = [];

  constructor(private service: ExerciseService) {}

  ngOnInit(): void {
     this.service.getExercises().subscribe((exercises: Exercise[]) => this.exercises$ = exercises);
  }
}
