import { IsArray, IsEmail, IsMongoId, IsString } from "class-validator";
import { Exercise } from "./exercise";
import { GroupWorkout } from "./group-workout";
import { Workout } from "./workout";

export class User {
  @IsString()
  @IsMongoId()
  _id: string;

  @IsString()
  username: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsArray()
  workoutIds?: string[];

  @IsArray()
  workouts?: Workout[];

  @IsArray()
  followers?: User[];

  @IsArray()
  groupWorkouts?: GroupWorkout[];

  @IsArray()
  exercises?: Exercise[];
}
