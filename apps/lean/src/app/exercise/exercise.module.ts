import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercises/exercises.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { RouterLinkWithHref } from "@angular/router";

@NgModule({
  declarations: [ExerciseComponent, ExerciseDetailComponent],
  imports: [CommonModule, RouterLinkWithHref],
  exports: [ExerciseComponent],
})
export class ExerciseModule {}
