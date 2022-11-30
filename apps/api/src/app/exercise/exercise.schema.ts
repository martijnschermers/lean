import { Document } from "mongoose";
import { ExerciseCategory, ExerciseType, Muscle } from "@lean/api-interfaces";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { isEnum, isString, isURL } from "class-validator";

export type ExerciseDocument = Exercise & Document;

@Schema()
export class Exercise {
  @Prop({ required: true, validate: isString })
  name: string;

  @Prop({ required: true, validate: isString })
  description: string;

  @Prop({ required: true, type: String, enum: ExerciseCategory, validate: (v) => isEnum(v, ExerciseCategory) })
  category: ExerciseCategory;

  @Prop({ required: true, type: String, enum: ExerciseType, validate: (v) => isEnum(v, ExerciseType) })
  type: ExerciseType;

  @Prop({ required: true, type: String, enum: Muscle, validate: (v) => isEnum(v, Muscle) })
  primaryMuscle: Muscle;

  @Prop({ required: true, type: Boolean, default: false })
  predefined: boolean;

  @Prop({ required: false, validate: (v) => isURL(v) || v === "" })
  image?: string;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
