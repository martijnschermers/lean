import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UsersComponent } from "./users.component";
import { UserService } from "../user.service";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe("UsersComponent", () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [UserService, HttpClient, HttpHandler]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
