import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { MongooseModule } from "@nestjs/mongoose";

import { environment } from "../environments/environment";
import { ExerciseModule } from "./exercise/exercise.module";
import { WorkoutModule } from "./workout/workout.module";
import { GroupWorkoutModule } from "./group-workout/group-workout.module";
import { UserModule } from "./user/user.module";
import { SetModule } from "./set/set.module";
import { AuthModule } from "./auth/auth.module";
import { TokenMiddleware } from "./auth/token.middleware";
import { Neo4jModule } from "nest-neo4j/dist";

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongoUrl),
    Neo4jModule.forRoot({
      scheme: "neo4j+s",
      host: process.env.NEO4J_HOST,
      port: 7687,
      username: process.env.NEO4J_USERNAME,
      password: process.env.NEO4J_PASSWORD
    }),
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
      },
      {
        path: "group-workout",
        module: GroupWorkoutModule
      }
    ])
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenMiddleware)
      .exclude(
        { path: "api/login", method: RequestMethod.POST },
        { path: "api/register", method: RequestMethod.POST }
      )
      .forRoutes(
        "exercise",
        "workout",
        "user",
        "group-workout"
      );
  }
}

//TODO: unit tet, integration test, e2e test, 10 total ~3 per test type
