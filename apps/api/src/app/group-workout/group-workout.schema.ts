import { Exercise, ExerciseSchema } from "../exercise/exercise.schema";
import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { isDate, isNumber, isString } from "class-validator";
import { GroupWorkoutInterface } from "@lean/api-interfaces";

export type GroupWorkoutDocument = GroupWorkout & Document;

@Schema()
export class GroupWorkout implements GroupWorkoutInterface {
  _id: string;

  @Prop({ required: true, validate: isString })
  name: string;

  @Prop({ required: true, validate: isNumber })
  duration: number;

  @Prop({ required: true, validate: isString })
  location: string;

  @Prop({ required: true, validate: isDate })
  date: Date;

  @Prop({ required: true, type: [ExerciseSchema] })
  exercises: Exercise[];
}

export const GroupWorkoutSchema = SchemaFactory.createForClass(GroupWorkout);
