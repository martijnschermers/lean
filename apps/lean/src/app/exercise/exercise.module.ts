import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercises/exercises.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { RouterLinkWithHref } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ExerciseFormComponent } from './exercise-form/exercise-form.component';

@NgModule({
  declarations: [
    ExerciseComponent,
    ExerciseDetailComponent,
    ExerciseFormComponent,
  ],
  imports: [CommonModule, FormsModule, RouterLinkWithHref, ReactiveFormsModule],
  exports: [ExerciseComponent],
})
export class ExerciseModule {}
