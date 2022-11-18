import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';

@NgModule({
  declarations: [WorkoutsComponent, WorkoutDetailComponent],
  imports: [CommonModule],
})
export class WorkoutsModule {}
