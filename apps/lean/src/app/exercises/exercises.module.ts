import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesListComponent } from './exercises/exercises.component';

@NgModule({
  declarations: [ExercisesListComponent],
  imports: [CommonModule],
  exports: [
    ExercisesListComponent
  ]
})
export class ExercisesModule {}
