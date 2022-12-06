import { TestBed } from '@angular/core/testing';

import { GroupWorkoutService } from './group-workout.service';

describe('GroupWorkoutService', () => {
  let service: GroupWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
