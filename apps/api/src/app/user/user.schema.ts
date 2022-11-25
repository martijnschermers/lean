import * as mongoose from 'mongoose';
import { ExerciseSchema } from '../exercise/exercise.schema';
import { GroupWorkoutSchema } from '../group-workout/group-workout.schema';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  workouts: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Workout'
  },
  groupWorkouts: {
    type: [GroupWorkoutSchema],
  },
  exercises: {
    type: [ExerciseSchema],
  },
});

UserSchema.add({
  followers: {
    type: [UserSchema],
  }
})
