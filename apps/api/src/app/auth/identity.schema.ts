import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { isEmail } from "class-validator";

export type IdentityDocument = Identity & Document;

@Schema()
export class Identity {
  @Prop({
    required: true, unique: true,
    validate: {
      validator: isEmail,
      message: props => `${props.value} is not a valid email address`
    }
  })
  email: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: false })
  hash?: string;

  @Prop({ required: false })
  token?: string;
}

export const IdentitySchema = SchemaFactory.createForClass(Identity);
