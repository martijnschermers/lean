import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ExercisesModule } from './exercises/exercises.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ExercisesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
