import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'lean-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.css'],
})
export class ExerciseFormComponent implements OnInit {
  exerciseForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.exerciseForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required],
      primaryMuscle: ['', Validators.required],
      image: ['']
    });
  }
}
