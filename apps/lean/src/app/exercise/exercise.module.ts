import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExerciseComponent } from "./exercises/exercises.component";
import { ExerciseDetailComponent } from "./exercise-detail/exercise-detail.component";
import { RouterLinkWithHref } from "@angular/router";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ExerciseComponent, ExerciseDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterLinkWithHref,
  ],
  exports: [ExerciseComponent]
})
export class ExerciseModule {
}
