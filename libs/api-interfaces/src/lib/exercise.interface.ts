import { ExerciseType } from "./type.enum";
import { ExerciseCategory } from "./category.enum";
import { Muscle } from "./muscle";
import { UserInterface } from "./user.interface";

export interface ExerciseInterface {
  _id: string;
  name: string;
  description: string;
  type: ExerciseType;
  category: ExerciseCategory;
  primaryMuscle: Muscle;
  predefined: boolean;
  image?: string;
  user?: UserInterface[];
}
