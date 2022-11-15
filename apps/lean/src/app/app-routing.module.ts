import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { WorkoutComponent } from "./workouts/workout.component";
import { AboutComponent } from "./about/about.component";
import { WorkoutDetailComponent } from "./workouts/workout-detail/workout-detail.component";
import { ExerciseComponent } from "./exercises/exercises/exercises.component";
import { ExerciseDetailComponent } from "./exercises/exercise-detail/exercise-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/workout', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'workout', component: WorkoutComponent },
  { path: 'workout/:id', component: WorkoutDetailComponent },
  { path: 'exercise', component: ExerciseComponent },
  { path: 'exercise/:id', component: ExerciseDetailComponent }
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
