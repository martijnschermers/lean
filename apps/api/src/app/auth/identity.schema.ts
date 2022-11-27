import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { isEmail } from "class-validator";

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

  @Prop({ required: true })
  hash: string;
}

export const IdentitySchema = SchemaFactory.createForClass(Identity);