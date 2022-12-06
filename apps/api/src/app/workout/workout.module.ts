import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { WorkoutSchema } from "./workout.schema";
import { WorkoutController } from "./workout.controller";
import { WorkoutService } from "./workout.service";
import { UserModule } from "../user/user.module";
import { ExerciseModule } from "../exercise/exercise.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Workout", schema: WorkoutSchema }
    ]),
    UserModule,
    ExerciseModule
  ],
  controllers: [WorkoutController],
  providers: [WorkoutService]
})
export class WorkoutModule {
}
