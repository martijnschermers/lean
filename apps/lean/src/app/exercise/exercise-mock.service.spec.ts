import { TestBed } from '@angular/core/testing';

import { ExerciseMockService } from './exercise-mock.service';

describe('ExerciseMockService', () => {
  let service: ExerciseMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
