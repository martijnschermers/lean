import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AddExerciseComponent } from "./add-exercise.component";
import { ExerciseService } from "../exercise.service";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { ExerciseFormComponent } from "../exercise-form/exercise-form.component";
import { FormBuilder } from "@angular/forms";

describe("AddExerciseComponent", () => {
  let component: AddExerciseComponent;
  let fixture: ComponentFixture<AddExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddExerciseComponent, ExerciseFormComponent],
      providers: [ExerciseService, HttpClient, HttpHandler, FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(AddExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
