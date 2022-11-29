import { ExerciseInterface } from "./exercise.interface";
import { GroupWorkoutInterface } from "./group-workout.interface";
import { WorkoutInterface } from "./workout.interface";

export interface UserInterface {
  _id: string;
  username: string;
  email: string;
  workouts?: WorkoutInterface[];
  followers?: UserInterface[];
  groupWorkouts?: GroupWorkoutInterface[];
  exercises?: ExerciseInterface[];
}
