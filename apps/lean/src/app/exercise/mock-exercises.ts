import { ExerciseInterface, ExerciseCategory, ExerciseType, Muscle } from "@lean/api-interfaces";

export const EXERCISES: ExerciseInterface[] = [
  {
    _id: "1",
    type: ExerciseType.STRENGTH,
    name: "Bench Press",
    description: "ExerciseInterface that engages the chest.",
    category: ExerciseCategory.BARBELL,
    primaryMuscle: Muscle.CHEST
  },
  {
    _id: "2",
    type: ExerciseType.STRENGTH,
    name: "Squat",
    description: "ExerciseInterface that engages the quads.",
    category: ExerciseCategory.BARBELL,
    primaryMuscle: Muscle.QUADS
  },
  {
    _id: "3",
    type: ExerciseType.STRENGTH,
    name: "Deadlift",
    description: "ExerciseInterface that engages the back.",
    category: ExerciseCategory.BARBELL,
    primaryMuscle: Muscle.BACK
  },
  {
    _id: "4",
    type: ExerciseType.STRENGTH,
    name: "Bent Over Row",
    description: "ExerciseInterface that engages the back.",
    category: ExerciseCategory.BARBELL,
    primaryMuscle: Muscle.BACK
  },
  {
    _id: "5",
    type: ExerciseType.STRENGTH,
    name: "Overhead Press",
    description: "ExerciseInterface that engages the shoulders.",
    category: ExerciseCategory.BARBELL,
    primaryMuscle: Muscle.SHOULDERS
  }
];
