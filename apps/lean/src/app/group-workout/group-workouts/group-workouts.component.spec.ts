import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWorkoutsComponent } from './group-workouts.component';
import { GroupWorkoutService } from "../group-workout.service";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe('GroupWorkoutsComponent', () => {
  let component: GroupWorkoutsComponent;
  let fixture: ComponentFixture<GroupWorkoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupWorkoutsComponent],
      providers: [GroupWorkoutService, HttpClient, HttpHandler]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
