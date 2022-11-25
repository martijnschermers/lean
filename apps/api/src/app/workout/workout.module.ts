import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { WorkoutSchema } from "./workout.schema";
import { WorkoutController } from './workout.controller';
import { WorkoutService } from './workout.service';
import { UserModule } from "../user/user.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Workout', schema: WorkoutSchema },
    ]),
    UserModule
  ],
  controllers: [WorkoutController],
  providers: [WorkoutService]
})
export class WorkoutModule {}
