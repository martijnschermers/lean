import { ComponentFixture, TestBed } from "@angular/core/testing";

import { WorkoutDetailComponent } from "./workout-detail.component";
import { WorkoutService } from "../workout.service";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { WorkoutInterface } from "@lean/api-interfaces";
import { of } from "rxjs";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MockService } from "ng-mocks";

describe("WorkoutDetailComponent", () => {
  let component: WorkoutDetailComponent;
  let fixture: ComponentFixture<WorkoutDetailComponent>;
  let workoutService: WorkoutService;

  beforeEach(async () => {
    const workout: WorkoutInterface = {
      _id: "1",
      name: "Workout 1",
      date: new Date(),
      duration: 0,
      prs: 0,
      volume: 0,
      sets: []
    };

    workoutService = MockService(WorkoutService);
    workoutService.findOne = jest.fn().mockReturnValue(of(workout));

    await TestBed.configureTestingModule({
      declarations: [WorkoutDetailComponent],
      providers: [{ provide: WorkoutService, useValue: workoutService }, HttpClient, HttpHandler],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
