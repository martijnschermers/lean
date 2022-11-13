import * as mongoose from 'mongoose';
import { ExerciseCategory, ExerciseType } from "@lean/api-interfaces";

export const ExercisesSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: {
    type: String,
    enum: [ExerciseType.STRENGTH, ExerciseType.CARDIO]
  },
  category: {
    type: String,
    enum: [ExerciseCategory.BARBELL, ExerciseCategory.BAND, ExerciseCategory.CABLE, ExerciseCategory.BODYWEIGHT, ExerciseCategory.KETTLEBELL, ExerciseCategory.MACHINE, ExerciseCategory.DUMBBELL, ExerciseCategory.OTHER]
  },
  primaryMuscle: String,
  image: String,
  reps: {
    type: Number,
    required: false
  },
  weight: {
    type: Number,
    required: false
  },
});
