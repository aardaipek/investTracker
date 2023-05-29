import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PortfolioDocument = HydratedDocument<Portfolio>;

@Schema()
export class Portfolio {
  @Prop({ required: true })
  name: string;
  @Prop({ default: true })
  isActive: boolean;
  @Prop({ required: true })
  priority: number;
  @Prop({ required: true })
  dashboardId: string;
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);
