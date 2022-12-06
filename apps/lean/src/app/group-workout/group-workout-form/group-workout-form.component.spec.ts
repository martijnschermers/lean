import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWorkoutFormComponent } from './group-workout-form.component';

describe('GroupWorkoutFormComponent', () => {
  let component: GroupWorkoutFormComponent;
  let fixture: ComponentFixture<GroupWorkoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupWorkoutFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupWorkoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
