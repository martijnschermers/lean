import { Module } from '@nestjs/common';
import { ExercisesController } from './controllers/exercises.controller';
import { ExercisesService } from './services/exercises.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ExercisesSchema } from "./schemas/exercises.schema";
import { WorkoutSchema } from "./schemas/workout.schema";
import { UserSchema } from "./schemas/user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Workout', schema: WorkoutSchema },
      { name: 'Exercise', schema: ExercisesSchema }
    ])
  ],
  controllers: [ExercisesController],
  providers: [ExercisesService]
})
export class ExercisesModule {}
