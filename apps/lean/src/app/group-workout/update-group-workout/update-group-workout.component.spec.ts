import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGroupWorkoutComponent } from './update-group-workout.component';

describe('UpdateGroupWorkoutComponent', () => {
  let component: UpdateGroupWorkoutComponent;
  let fixture: ComponentFixture<UpdateGroupWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateGroupWorkoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateGroupWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
