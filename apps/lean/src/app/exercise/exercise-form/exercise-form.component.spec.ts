import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ExerciseFormComponent } from "./exercise-form.component";
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../../auth/auth.service";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe("ExerciseFormComponent", () => {
  let component: ExerciseFormComponent;
  let fixture: ComponentFixture<ExerciseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseFormComponent],
      providers: [FormBuilder, AuthService, HttpClient, HttpHandler]
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
