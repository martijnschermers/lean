import { SetInterface } from "./set.interface";

export interface WorkoutInterface {
  _id: string;
  name: string;
  duration: string;
  volume: number;
  prs: number;
  date: Date;
  exercises?: { name: string, sets: SetInterface[] }[];
  sets?: SetInterface[];
}
