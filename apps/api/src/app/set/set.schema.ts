import * as mongoose from 'mongoose';
import { ExerciseSchema } from "../exercise/exercise.schema";

export const SetSchema = new mongoose.Schema({
  reps: {
    type: Number,
    required: true,
    default: 0,
  },
  weight: {
    type: Number,
    required: true,
    default: 0,
  },
  exercise: {
    type: ExerciseSchema,
    required: true,
  }
})
