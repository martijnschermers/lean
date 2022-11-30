import { TestBed } from '@angular/core/testing';

import { WorkoutService } from './workout.service';
import { HttpClient, HttpHandler } from "@angular/common/http";

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(WorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
