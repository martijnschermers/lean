import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercises/exercises.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExerciseFormComponent } from './exercise-form/exercise-form.component';
import { ExerciseService } from './exercise.service';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { UpdateExerciseComponent } from './update-exercise/update-exercise.component';
import { ExerciseCardComponent } from './exercise-card/exercise-card.component';

@NgModule({
  declarations: [
    ExerciseComponent,
    ExerciseDetailComponent,
    ExerciseFormComponent,
    AddExerciseComponent,
    UpdateExerciseComponent,
    ExerciseCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLinkWithHref,
    ReactiveFormsModule,
    RouterLink,
  ],
  exports: [ExerciseComponent],
  providers: [ExerciseService],
})
export class ExerciseModule {}
