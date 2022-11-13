import { Exercise } from "./exercise";
import { User } from "./user";

export interface Workout {
  _id: number;
  name: string;
  duration: number;
  volume: number;
  prs: number;
  date: Date;
  exercises: Exercise[];
  user: User;
}
