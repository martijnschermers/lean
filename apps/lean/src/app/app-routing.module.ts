import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkoutsComponent } from "./workout/workouts/workouts.component";
import { AboutComponent } from "./about/about.component";
import { WorkoutDetailComponent } from "./workout/workout-detail/workout-detail.component";
import { UsersComponent } from "./user/users/users.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ExerciseComponent } from "./exercise/exercises/exercises.component";
import { ExerciseDetailComponent } from "./exercise/exercise-detail/exercise-detail.component";
import { AddExerciseComponent } from "./exercise/add-exercise/add-exercise.component";
import { UpdateExerciseComponent } from "./exercise/update-exercise/update-exercise.component";
import { AddWorkoutComponent } from "./workout/add-workout/add-workout.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth/auth.guard";
import { UpdateWorkoutComponent } from "./workout/update-workout/update-workout.component";
import { GroupWorkoutsComponent } from "./group-workout/group-workouts/group-workouts.component";
import { UpdateGroupWorkoutComponent } from "./group-workout/update-group-workout/update-group-workout.component";
import { AdminGuard } from "./auth/admin.guard";
import { AddGroupWorkoutComponent } from "./group-workout/add-group-workout/add-group-workout.component";

const routes: Routes = [
  { path: "", component: HomeComponent, title: "Lean" },
  { path: "login", component: LoginComponent, title: "Login | Lean" },
  { path: "register", component: RegisterComponent, title: "Register | Lean" },
  { path: "about", component: AboutComponent, title: "About | Lean" },
  { path: "exercise", component: ExerciseComponent, title: "Exercises | Lean" },
  { path: "exercise/:id", component: ExerciseDetailComponent, canActivate: [AuthGuard], title: "Exercise | Lean" },
  { path: "exercise/add", component: AddExerciseComponent, canActivate: [AuthGuard], title: "Add Exercise | Lean" },
  {
    path: "exercise/update/:id",
    component: UpdateExerciseComponent,
    canActivate: [AuthGuard],
    title: "Update Exercise | Lean"
  },
  { path: "workout", component: WorkoutsComponent, canActivate: [AuthGuard], title: "Workouts | Lean" },
  {
    path: "workout/add",
    component: AddWorkoutComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
    title: "Add Workout | Lean"
  },
  { path: "workout/:id", component: WorkoutDetailComponent, canActivate: [AuthGuard], title: "Workout | Lean" },
  {
    path: "workout/update/:id",
    component: UpdateWorkoutComponent,
    canActivate: [AuthGuard],
    title: "Update Workout | Lean"
  },
  {
    path: "group-workout",
    component: GroupWorkoutsComponent,
    canActivate: [AuthGuard],
    title: "Group Workouts | Lean"
  },
  {
    path: "group-workout/add",
    component: AddGroupWorkoutComponent,
    canActivate: [AuthGuard, AdminGuard],
    pathMatch: "full",
    title: "Add Group Workout | Lean"
  },
  {
    path: "group-workout/:id",
    component: WorkoutDetailComponent,
    canActivate: [AuthGuard],
    title: "Group Workout | Lean"
  },
  {
    path: "group-workout/update/:id",
    component: UpdateGroupWorkoutComponent,
    canActivate: [AuthGuard, AdminGuard],
    title: "Update Group Workout | Lean"
  },
  { path: "user", component: UsersComponent, title: "Users | Lean" },
  { path: "profile", component: ProfileComponent, title: "Profile | Lean" }
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
