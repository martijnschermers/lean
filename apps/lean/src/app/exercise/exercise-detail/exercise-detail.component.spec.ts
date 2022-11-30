import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ExerciseDetailComponent } from "./exercise-detail.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { ExerciseService } from "../exercise.service";

describe("ExerciseDetailComponent", () => {
  let component: ExerciseDetailComponent;
  let fixture: ComponentFixture<ExerciseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseDetailComponent],
      providers: [ExerciseService, HttpClient, HttpHandler],
      imports: [RouterTestingModule.withRoutes([{ path: "exercise/1", component: ExerciseDetailComponent }])]
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
