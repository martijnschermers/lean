import { TestBed } from '@angular/core/testing';

import { GroupWorkoutService } from './group-workout.service';
import { HttpClient, HttpHandler } from "@angular/common/http";

describe('GroupWorkoutService', () => {
  let service: GroupWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(GroupWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
