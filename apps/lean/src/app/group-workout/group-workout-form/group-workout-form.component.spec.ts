import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWorkoutFormComponent } from './group-workout-form.component';
import { FormBuilder } from "@angular/forms";
import { ExerciseService } from "../../exercise/exercise.service";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";

describe('GroupWorkoutFormComponent', () => {
  let component: GroupWorkoutFormComponent;
  let fixture: ComponentFixture<GroupWorkoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupWorkoutFormComponent],
      providers: [FormBuilder, ExerciseService, HttpClient, HttpHandler],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupWorkoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
