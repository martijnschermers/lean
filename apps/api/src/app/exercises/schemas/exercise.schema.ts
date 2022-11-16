import * as mongoose from "mongoose";
import { ExerciseCategory, ExerciseType, Muscle } from "@lean/api-interfaces";

export const ExerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: [ExerciseType.STRENGTH, ExerciseType.CARDIO],
    required: true
  },
  category: {
    type: String,
    enum: [ExerciseCategory.BARBELL, ExerciseCategory.BAND, ExerciseCategory.CABLE, ExerciseCategory.BODYWEIGHT, ExerciseCategory.KETTLEBELL, ExerciseCategory.MACHINE, ExerciseCategory.DUMBBELL, ExerciseCategory.OTHER],
    required: true
  },
  primaryMuscle: {
    type: String,
    enum: [Muscle.LATS, Muscle.BACK, Muscle.CHEST, Muscle.BICEPS, Muscle.TRICEPS, Muscle.FOREARMS, Muscle.ABS, Muscle.TRAPS, Muscle.SHOULDERS, Muscle.CALVES, Muscle.GLUTES, Muscle.HAMSTRINGS, Muscle.QUADS, Muscle.OTHER],
    required: true
  },
  image: {
    type: String,
    required: true
  },
});
