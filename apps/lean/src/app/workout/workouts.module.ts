import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { RouterLinkWithHref } from "@angular/router";

@NgModule({
  declarations: [WorkoutsComponent, WorkoutDetailComponent],
  imports: [CommonModule, RouterLinkWithHref]
})
export class WorkoutsModule {}
