import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserDetailComponent } from "./user-detail.component";
import { UserService } from "../user.service";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";

describe("UserDetailComponent", () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
      providers: [UserService, HttpClient, HttpHandler],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
