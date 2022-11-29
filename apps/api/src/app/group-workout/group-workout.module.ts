import { Module } from '@nestjs/common';
import { GroupWorkout, GroupWorkoutSchema } from "./group-workout.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GroupWorkout.name, schema: GroupWorkoutSchema },
    ])
  ],
})
export class GroupWorkoutModule {}
