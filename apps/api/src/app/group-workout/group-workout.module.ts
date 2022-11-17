import { Module } from '@nestjs/common';
import { GroupWorkoutSchema } from "./group-workout.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'GroupWorkout', schema: GroupWorkoutSchema },
    ])
  ],
})
export class GroupWorkoutModule {}
