import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ExerciseFormComponent } from "./exercise-form.component";
import { FormBuilder } from "@angular/forms";

describe("ExerciseFormComponent", () => {
  let component: ExerciseFormComponent;
  let fixture: ComponentFixture<ExerciseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseFormComponent],
      providers: [FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
