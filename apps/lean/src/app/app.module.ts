import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ExerciseModule } from './exercises/exercise.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ExerciseModule,
    WorkoutsModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
