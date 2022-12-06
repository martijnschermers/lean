import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupWorkoutComponent } from './add-group-workout.component';

describe('AddGroupWorkoutComponent', () => {
  let component: AddGroupWorkoutComponent;
  let fixture: ComponentFixture<AddGroupWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddGroupWorkoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddGroupWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
