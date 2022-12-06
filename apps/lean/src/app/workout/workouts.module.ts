import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkoutCardComponent } from './workout-card/workout-card.component';
import { UpdateWorkoutComponent } from './update-workout/update-workout.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';

@NgModule({
  declarations: [
    WorkoutsComponent,
    WorkoutDetailComponent,
    AddWorkoutComponent,
    WorkoutCardComponent,
    UpdateWorkoutComponent,
    WorkoutFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLinkWithHref,
    ReactiveFormsModule,
    RouterLink,
  ],
})
export class WorkoutsModule {}
