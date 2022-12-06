import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorkoutComponent } from './update-workout.component';
import { WorkoutService } from "../workout.service";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";

describe('UpdateWorkoutComponent', () => {
  let component: UpdateWorkoutComponent;
  let fixture: ComponentFixture<UpdateWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateWorkoutComponent],
      providers: [WorkoutService, HttpClient, HttpHandler],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
