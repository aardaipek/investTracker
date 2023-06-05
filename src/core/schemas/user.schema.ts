import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  surname: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true })
  email: string;
  @Prop({ default: true })
  isActive: boolean;
  // @Prop({ required: true })
  // roles: [string];
}

export const UserSchema = SchemaFactory.createForClass(User);
