import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkoutsComponent } from "./workout/workouts/workouts.component";
import { AboutComponent } from "./about/about.component";
import { WorkoutDetailComponent } from "./workout/workout-detail/workout-detail.component";
import { UsersComponent } from "./user/users/users.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/user", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "about", component: AboutComponent },
  { path: "workout", component: WorkoutsComponent, canActivate: [AuthGuard] },
  { path: "workout/:id", component: WorkoutDetailComponent },
  { path: "user", component: UsersComponent },
  { path: "user/:id", component: UserDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
