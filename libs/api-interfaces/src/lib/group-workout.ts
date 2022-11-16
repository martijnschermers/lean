import { Exercise } from "./exercise";

export class GroupWorkout {
  _id: string;
  name: string;
  duration: number;
  location: string;
  date: Date;  
  exercises: Exercise[];
}
