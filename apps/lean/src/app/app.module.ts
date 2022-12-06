import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ExerciseModule } from "./exercise/exercise.module";
import { WorkoutsModule } from "./workout/workouts.module";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { ComponentsModule } from "./components/components.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ExerciseModule,
    WorkoutsModule,
    UserModule,
    AuthModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
