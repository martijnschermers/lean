import { ExerciseInterface } from "./exercise.interface";

export interface GroupWorkoutInterface {
  _id: string;
  name: string;
  duration: string;
  location: string;
  date: Date;
  exercises: ExerciseInterface[];
}
