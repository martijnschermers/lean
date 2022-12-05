import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkoutsComponent } from "./workout/workouts/workouts.component";
import { AboutComponent } from "./about/about.component";
import { WorkoutDetailComponent } from "./workout/workout-detail/workout-detail.component";
import { UsersComponent } from "./user/users/users.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ExerciseComponent } from "./exercise/exercises/exercises.component";
import { ExerciseDetailComponent } from "./exercise/exercise-detail/exercise-detail.component";
import { AddExerciseComponent } from "./exercise/add-exercise/add-exercise.component";
import { UpdateExerciseComponent } from "./exercise/update-exercise/update-exercise.component";
import { AddWorkoutComponent } from "./workout/add-workout/add-workout.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "about", component: AboutComponent },
  { path: "exercise", component: ExerciseComponent, canActivate: [AuthGuard] },
  { path: "exercise/add", component: AddExerciseComponent, canActivate: [AuthGuard] },
  { path: "exercise/update/:id", component: UpdateExerciseComponent, canActivate: [AuthGuard] },
  { path: "exercise/:id", component: ExerciseDetailComponent, canActivate: [AuthGuard] },
  { path: "workout", component: WorkoutsComponent, canActivate: [AuthGuard] },
  { path: "workout/add", component: AddWorkoutComponent, canActivate: [AuthGuard] },
  { path: "workout/:id", component: WorkoutDetailComponent, canActivate: [AuthGuard] },
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
