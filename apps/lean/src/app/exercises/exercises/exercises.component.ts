import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { Exercise } from "@lean/api-interfaces";

@Component({
  selector: 'lean-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
})
export class ExercisesListComponent implements OnInit {
  exercises$: Exercise[] = [];

  constructor(private service: ExercisesService) {}

  ngOnInit(): void {
     this.service.getExercises().subscribe((exercises: Exercise[]) => this.exercises$ = exercises);
  }
}
