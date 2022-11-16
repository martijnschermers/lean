import { Module } from '@nestjs/common';
import { ExercisesController } from './controllers/exercises.controller';
import { ExercisesService } from './services/exercises.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ExerciseSchema } from "./schemas/exercise.schema";
import { WorkoutSchema } from "./schemas/workout.schema";
import { UserSchema } from "./schemas/user.schema";
import { GroupWorkoutSchema } from './schemas/group-workout.schema';
import { SetSchema } from './schemas/set.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Workout', schema: WorkoutSchema },
      { name: 'Exercise', schema: ExerciseSchema }, 
      { name: 'Set', schema: SetSchema }, 
      { name: 'GroupWorkout', schema: GroupWorkoutSchema}
    ])
  ],
  controllers: [ExercisesController],
  providers: [ExercisesService]
})
export class ExercisesModule {}
