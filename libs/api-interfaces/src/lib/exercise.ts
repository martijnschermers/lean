import { ExerciseType } from "./type";
import { ExerciseCategory } from "./category";

export interface Exercise {
  _id: number;
  name: string;
  description: string;
  type: ExerciseType;
  category: ExerciseCategory;
  primaryMuscle: string;
  image: string;
  reps?: number;
  weight?: number;
}
