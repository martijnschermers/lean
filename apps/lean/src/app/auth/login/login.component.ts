/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { catchError, map } from "rxjs";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLinkWithHref } from "@angular/router";

@Component({
  selector: "lean-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLinkWithHref]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    }) as FormGroup;
  }

  get email() {
    return this.loginForm.get("email")!;
  }

  get password() {
    return this.loginForm.get("password")!;
  }

  async login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value)
      .pipe(
        map((token) => {
          if (token) {
            this.router.navigate(["/"]);
          }
        }),
        catchError((err) => {
          this.loginForm.setErrors({ invalidCredentials: true, message: err.error.message });
          throw err;
        })
      ).subscribe();
  }
}
