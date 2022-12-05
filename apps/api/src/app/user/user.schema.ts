import { Document, Schema as MongooseSchema } from "mongoose";
import { GroupWorkout, GroupWorkoutSchema } from "../group-workout/group-workout.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { isEmail, isString } from "class-validator";
import { Workout } from "../workout/workout.schema";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, validate: isString })
  username: string;

  @Prop({ required: true, validate: isEmail })
  email: string;

  @Prop({ required: true, default: false })
  admin: boolean;

  @Prop({ required: true, type: [MongooseSchema.Types.ObjectId], ref: "Workout" })
  workouts: Workout[];

  @Prop({ required: true, type: [GroupWorkoutSchema] })
  groupWorkouts: GroupWorkout[];

  @Prop({ required: true })
  followers: User[];
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.add({
  followers: {
    type: [UserSchema]
  }
});
