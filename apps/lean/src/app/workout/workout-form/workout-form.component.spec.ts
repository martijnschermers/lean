import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutFormComponent } from './workout-form.component';
import { FormBuilder } from "@angular/forms";
import { ExerciseService } from "../../exercise/exercise.service";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe('WorkoutFormComponent', () => {
  let component: WorkoutFormComponent;
  let fixture: ComponentFixture<WorkoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutFormComponent],
      providers: [FormBuilder, ExerciseService, HttpClient, HttpHandler]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
