import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWorkoutDetailComponent } from './group-workout-detail.component';

describe('GroupWorkoutDetailComponent', () => {
  let component: GroupWorkoutDetailComponent;
  let fixture: ComponentFixture<GroupWorkoutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupWorkoutDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupWorkoutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
