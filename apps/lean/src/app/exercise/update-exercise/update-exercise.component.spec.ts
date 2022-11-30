import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExerciseComponent } from './update-exercise.component';
import { ExerciseService } from "../exercise.service";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";

describe('UpdateExerciseComponent', () => {
  let component: UpdateExerciseComponent;
  let fixture: ComponentFixture<UpdateExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateExerciseComponent],
      providers: [ExerciseService, HttpClient, HttpHandler],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
