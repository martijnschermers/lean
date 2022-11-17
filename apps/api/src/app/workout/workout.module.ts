import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { WorkoutSchema } from "./workout.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Workout', schema: WorkoutSchema },
    ])
  ]
})
export class WorkoutModule {}
