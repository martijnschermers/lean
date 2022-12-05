import { Set, SetSchema } from "../set/set.schema";
import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { isDate, isNumber, isString } from "class-validator";

export type WorkoutDocument = Workout & Document;

@Schema()
export class Workout {
  @Prop({ required: true, validate: isString })
  name: string;

  @Prop({ required: true, validate: isString })
  duration: string;

  @Prop({ required: true, validate: isNumber })
  volume: number;

  @Prop({ required: true, default: 0, validate: isNumber })
  prs: number;

  @Prop({ required: true, default: Date.now(), validate: isDate })
  date: Date;

  @Prop({ required: false, type: [SetSchema] })
  sets?: Set[];
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);
