import { Module } from '@nestjs/common';
import { GroupWorkout, GroupWorkoutSchema } from "./group-workout.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { GroupWorkoutController } from './group-workout.controller';
import { GroupWorkoutService } from './group-workout.service';
import { UserModule } from "../user/user.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GroupWorkout.name, schema: GroupWorkoutSchema },
    ]),
    UserModule
  ],
  controllers: [GroupWorkoutController],
  providers: [GroupWorkoutService],
})
export class GroupWorkoutModule {}
