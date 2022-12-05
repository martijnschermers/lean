import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { MongooseModule } from "@nestjs/mongoose";

import { environment } from "../environments/environment";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ExerciseModule } from "./exercise/exercise.module";
import { WorkoutModule } from "./workout/workout.module";
import { GroupWorkoutModule } from "./group-workout/group-workout.module";
import { UserModule } from "./user/user.module";
import { SetModule } from "./set/set.module";
import { AuthModule } from "./auth/auth.module";
import { TokenMiddleware } from "./auth/token.middleware";

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongoUrl),
    ExerciseModule,
    WorkoutModule,
    GroupWorkoutModule,
    UserModule,
    SetModule,
    AuthModule,
    RouterModule.register([
      {
        path: "exercise",
        module: ExerciseModule
      },
      {
        path: "workout",
        module: WorkoutModule
      },
      {
        path: "user",
        module: UserModule
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenMiddleware)
      .exclude(
        { path: "api/login", method: RequestMethod.POST },
        { path: "api/register", method: RequestMethod.POST },
      )
      .forRoutes(
        "exercise",
        "workout"
      );
  }
}
