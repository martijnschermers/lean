import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { WorkoutComponent } from "./workouts/workout.component";
import { AboutComponent } from "./about/about.component";
import { WorkoutDetailComponent } from "./workouts/workout-detail/workout-detail.component";
import { ExerciseComponent } from "./exercises/exercises/exercises.component";
import { ExerciseDetailComponent } from "./exercises/exercise-detail/exercise-detail.component";
import { UsersComponent } from "./users/users.component";
import { UserDetailComponent } from './users/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'workout', component: WorkoutComponent },
  { path: 'workout/:id', component: WorkoutDetailComponent },
  { path: 'exercise', component: ExerciseComponent },
  { path: 'exercise/:id', component: ExerciseDetailComponent }, 
  { path: 'user', component: UsersComponent },
  { path: 'user/:id', component: UserDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
