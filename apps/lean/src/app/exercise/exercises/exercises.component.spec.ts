import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseComponent } from './exercises.component';
import { ExerciseService } from "../exercise.service";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe('ExercisesListComponent', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseComponent],
      providers: [ExerciseService, HttpClient, HttpHandler]
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
