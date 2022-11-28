import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Exercise } from "@lean/api-interfaces";
import { FormGroup } from "@angular/forms";
import { Location } from "@angular/common";
import { ExerciseMockService } from "../exercise-mock.service";

@Component({
  selector: 'lean-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css'],
})
export class ExerciseDetailComponent implements OnInit {
  exercise: Exercise;

  constructor(private route: ActivatedRoute, private exerciseService: ExerciseMockService, private location: Location) {
  }

  ngOnInit(): void {
    this.getExercise();
  }

  getExercise(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.exerciseService.getExercise(id).subscribe(exercise => this.exercise = exercise);
  }

  updateExercise(exerciseForm: FormGroup): void {
    exerciseForm.value._id = this.exercise._id;
    this.exerciseService.updateExercise(exerciseForm.value).subscribe(() => {
      this.location.back();
    });
  }
}
