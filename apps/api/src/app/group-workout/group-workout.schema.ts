import * as mongoose from 'mongoose';
import { ExerciseSchema } from "../exercise/exercise.schema";

export const GroupWorkoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  exercises: {
    type: [ExerciseSchema],
    required: true,
  },
});
