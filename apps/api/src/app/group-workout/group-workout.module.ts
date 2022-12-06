import { Module } from '@nestjs/common';
import { GroupWorkout, GroupWorkoutSchema } from "./group-workout.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { GroupWorkoutController } from './group-workout.controller';
import { GroupWorkoutService } from './group-workout.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GroupWorkout.name, schema: GroupWorkoutSchema },
    ])
  ],
  controllers: [GroupWorkoutController],
  providers: [GroupWorkoutService],
})
export class GroupWorkoutModule {}
