import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserDetailComponent } from "./user-detail.component";
import { RouterTestingModule } from "@angular/router/testing";
import { UserService } from "../user.service";
import { Component } from "@angular/core";
import { UserInterface } from "@lean/api-interfaces";
import { UserFormComponent } from "../user-form/user-form.component";
import { FormsModule } from "@angular/forms";

describe("UserDetailComponent", () => {
  let component: MockUserDetailComponent;
  let fixture: ComponentFixture<MockUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailComponent, MockUserDetailComponent, UserFormComponent],
      providers: [UserService],
      imports: [RouterTestingModule.withRoutes([]), FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MockUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  @Component({
    selector: "lean-mock-user-detail",
    template: `
      <lean-user-detail [user]="user">Mock User Detail Component</lean-user-detail>`
  })
  class MockUserDetailComponent {
    user: UserInterface = {
      _id: "1",
      username: "test",
      email: "test"
    };
  }
});
