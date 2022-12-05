import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkoutComponent } from './add-workout.component';
import { FormBuilder } from "@angular/forms";
import { WorkoutService } from "../workout.service";
import { ExerciseService } from "../../exercise/exercise.service";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe('AddWorkoutComponent', () => {
  let component: AddWorkoutComponent;
  let fixture: ComponentFixture<AddWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddWorkoutComponent],
      providers: [FormBuilder, WorkoutService, ExerciseService, HttpClient, HttpHandler]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
