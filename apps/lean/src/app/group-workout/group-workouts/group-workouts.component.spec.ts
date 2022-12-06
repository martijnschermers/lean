import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWorkoutsComponent } from './group-workouts.component';

describe('GroupWorkoutsComponent', () => {
  let component: GroupWorkoutsComponent;
  let fixture: ComponentFixture<GroupWorkoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupWorkoutsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
