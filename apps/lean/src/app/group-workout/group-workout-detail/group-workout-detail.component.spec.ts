import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GroupWorkoutDetailComponent } from "./group-workout-detail.component";
import { GroupWorkoutService } from "../group-workout.service";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";

describe("GroupWorkoutDetailComponent", () => {
  let component: GroupWorkoutDetailComponent;
  let fixture: ComponentFixture<GroupWorkoutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupWorkoutDetailComponent],
      providers: [GroupWorkoutService, HttpClient, HttpHandler],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupWorkoutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
