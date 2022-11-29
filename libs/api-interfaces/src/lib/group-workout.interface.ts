import { ExerciseInterface } from "./exercise.interface";

export interface GroupWorkoutInterface {
  _id: string;
  name: string;
  duration: number;
  location: string;
  date: Date;
  exercises: ExerciseInterface[];
}
