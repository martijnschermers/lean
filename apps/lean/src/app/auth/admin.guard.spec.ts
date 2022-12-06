import { TestBed } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';
import { AuthService } from "./auth.service";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe('AdminGuard', () => {
  let guard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, HttpClient, HttpHandler]
    });
    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
