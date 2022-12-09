import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupWorkoutComponent } from './add-group-workout.component';
import { GroupWorkoutService } from "../group-workout.service";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe('AddGroupWorkoutComponent', () => {
  let component: AddGroupWorkoutComponent;
  let fixture: ComponentFixture<AddGroupWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddGroupWorkoutComponent],
      providers: [GroupWorkoutService, HttpClient, HttpHandler]
    }).compileComponents();

    fixture = TestBed.createComponent(AddGroupWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
