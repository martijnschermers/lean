import * as mongoose from 'mongoose';
import { ExerciseSchema } from './exercise.schema';
import { GroupWorkoutSchema } from './group-workout.schema';

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  followers: {
    type: [this],
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
