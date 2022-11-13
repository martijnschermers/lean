import { ExerciseType } from "./type";
import { ExerciseCategory } from "./category";
import { Muscle } from "./muscle";
import { IsEnum, IsInt, IsMongoId, IsString, IsUrl } from "class-validator";

export class Exercise {
  @IsString()
  @IsMongoId()
  _id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(ExerciseType)
  type: ExerciseType;

  @IsEnum(ExerciseCategory)
  category: ExerciseCategory;

  @IsEnum(Muscle)
  primaryMuscle: Muscle;

  @IsString()
  @IsUrl()
  image: string;

  @IsInt()
  workoutId?: number;

  @IsInt()
  reps?: number;

  @IsInt()
  weight?: number;
}
