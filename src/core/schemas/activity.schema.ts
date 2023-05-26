import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ActivityDocument = HydratedDocument<Activity>;

@Schema()
export class Activity {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  isSuccess: boolean;
  @Prop({ required: true })
  type: number; // TODO enum yap
  @Prop({ required: true })
  portfolioId: number;
  @Prop({ required: true })
  purchaseDate: string;
  @Prop({ required: true })
  quantity: number;
  @Prop({ required: true })
  price: number;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
