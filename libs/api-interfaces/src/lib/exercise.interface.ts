import { ExerciseType } from "./type.enum";
import { ExerciseCategory } from "./category.enum";
import { Muscle } from "./muscle";

export interface ExerciseInterface {
  _id: string;
  name: string;
  description: string;
  type: ExerciseType;
  category: ExerciseCategory;
  primaryMuscle: Muscle;
  image?: string;
}
