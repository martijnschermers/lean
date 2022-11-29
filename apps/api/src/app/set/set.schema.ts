import { Exercise, ExerciseSchema } from "../exercise/exercise.schema";
import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { isBoolean, isNumber } from "class-validator";
import { SetInterface } from "@lean/api-interfaces";

export type SetDocument = Set & Document;

@Schema()
export class Set implements SetInterface {
  _id: string;

  @Prop({ required: true, default: 0, validate: isNumber })
  weight: number;

  @Prop({ required: true, default: 0, validate: isNumber })
  reps: number;

  @Prop({ required: true, default: false, validate: isBoolean })
  finished: boolean;

  @Prop({ required: true, type: ExerciseSchema })
  exercise: Exercise;
}

export const SetSchema = SchemaFactory.createForClass(Set);
