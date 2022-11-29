import { SetInterface } from "./set.interface";

export interface WorkoutInterface {
  _id: string;
  name: string;
  duration: number;
  volume: number;
  prs: number;
  date: Date;
  sets?: SetInterface[];
}
