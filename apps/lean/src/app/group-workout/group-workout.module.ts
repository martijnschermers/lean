import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupWorkoutsComponent } from './group-workouts/group-workouts.component';
import { GroupWorkoutCardComponent } from './group-workout-card/group-workout-card.component';
import { RouterLink } from '@angular/router';
import { GroupWorkoutDetailComponent } from './group-workout-detail/group-workout-detail.component';
import { AddGroupWorkoutComponent } from './add-group-workout/add-group-workout.component';
import { UpdateGroupWorkoutComponent } from './update-group-workout/update-group-workout.component';
import { GroupWorkoutFormComponent } from './group-workout-form/group-workout-form.component';

@NgModule({
  declarations: [
    GroupWorkoutsComponent,
    GroupWorkoutCardComponent,
    GroupWorkoutDetailComponent,
    AddGroupWorkoutComponent,
    UpdateGroupWorkoutComponent,
    GroupWorkoutFormComponent,
  ],
  imports: [CommonModule, RouterLink],
})
export class GroupWorkoutModule {}
