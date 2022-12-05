import { GroupWorkoutInterface } from "./group-workout.interface";
import { WorkoutInterface } from "./workout.interface";

export interface UserInterface {
  _id: string;
  username: string;
  email: string;
  admin: boolean;
  workouts?: WorkoutInterface[];
  followers?: UserInterface[];
  groupWorkouts?: GroupWorkoutInterface[];
  token?: string;
}
