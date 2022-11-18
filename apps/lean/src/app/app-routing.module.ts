import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { WorkoutsComponent } from "./workout/workouts/workouts.component";
import { AboutComponent } from "./about/about.component";
import { WorkoutDetailComponent } from "./workout/workout-detail/workout-detail.component";
import { ExerciseComponent } from "./exercise/exercises/exercises.component";
import { ExerciseDetailComponent } from "./exercise/exercise-detail/exercise-detail.component";
import { UsersComponent } from "./user/users/users.component";
import { UserDetailComponent } from './user/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'workout', component: WorkoutsComponent },
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
