import { Set } from "./set";
import { IsArray, IsDate, IsInt, IsMongoId, IsString } from "class-validator";

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
  sets?: Set[];
}
