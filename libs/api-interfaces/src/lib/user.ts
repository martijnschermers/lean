import { Workout } from "./workout";

export interface User {
  _id: number;
  name: string;
  email: string;
  password: string;
  workouts: Workout[];
  friends: User[];
  // tracking: Tracking[];
}
