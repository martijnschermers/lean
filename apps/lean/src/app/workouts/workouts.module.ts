import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutComponent } from './workout.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';

@NgModule({
  declarations: [WorkoutComponent, WorkoutDetailComponent],
  imports: [CommonModule],
})
export class WorkoutsModule {}
