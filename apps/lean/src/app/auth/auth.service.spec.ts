import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClient } from "@angular/common/http";

describe('AuthService', () => {
  // let httpSpy: jasmine.SpyObj<HttpClient>;
  let service: AuthService;

  beforeEach(() => {
    // httpSpy = jasmine.createSpyObj('HttpClient', ['post']);
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
