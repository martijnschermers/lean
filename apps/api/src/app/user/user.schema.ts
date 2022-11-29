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
  workoutsIds: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Workout',
    default: []
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

UserSchema.virtual('workouts', {
  ref: 'Workout',
  localField: 'workoutsIds',
  foreignField: '_id',
  justOne: false
});
