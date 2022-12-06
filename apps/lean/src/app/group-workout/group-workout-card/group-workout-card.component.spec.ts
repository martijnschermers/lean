import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWorkoutCardComponent } from './group-workout-card.component';

describe('GroupWorkoutCardComponent', () => {
  let component: GroupWorkoutCardComponent;
  let fixture: ComponentFixture<GroupWorkoutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupWorkoutCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupWorkoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
