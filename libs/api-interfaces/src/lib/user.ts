import { Workout } from "./workout";
import { IsArray, IsEmail, IsMongoId, IsString } from "class-validator";
import { Exercise } from "./exercise";
import { GroupWorkout } from "./group-workout";

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
  followers: User[];

  @IsArray()
  groupWorkouts: GroupWorkout[];

  @IsArray()
  exercises: Exercise[];
}
