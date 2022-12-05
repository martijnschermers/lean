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

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "about", component: AboutComponent },
  { path: "exercise", component: ExerciseComponent },
  { path: "exercise/add", component: AddExerciseComponent },
  { path: "exercise/update/:id", component: UpdateExerciseComponent },
  { path: "exercise/:id", component: ExerciseDetailComponent },
  { path: "workout", component: WorkoutsComponent },
  { path: "workout/add", component: AddWorkoutComponent },
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
