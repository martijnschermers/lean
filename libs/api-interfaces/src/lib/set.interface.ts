import { ExerciseInterface } from "./exercise.interface";

export interface SetInterface {
  _id: string;
  weight: number;
  reps: number;
  finished: boolean;
  exercise: ExerciseInterface;
}
