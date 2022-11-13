import { Workout } from "./workout";
import { IsArray, IsEmail, IsMongoId, IsString } from "class-validator";

export class User {
  @IsString()
  @IsMongoId()
  _id: string;

  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsArray()
  workouts: Workout[];

  @IsArray()
  friends: User[];
  // tracking: Tracking[];
}
