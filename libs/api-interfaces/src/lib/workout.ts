import { Exercise } from "./exercise";
import { User } from "./user";
import { IsArray, IsDate, IsInt, IsMongoId, IsObject, IsString } from "class-validator";

export class Workout {
  @IsString()
  @IsMongoId()
  _id: string;

  @IsString()
  name: string;

  @IsInt()
  duration: number;

  @IsInt()
  volume: number;

  @IsInt()
  prs: number;

  @IsDate()
  date: Date;

  @IsArray()
  exercises: Exercise[];

  @IsObject()
  user: User;
}
