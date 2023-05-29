import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DashboardDocument = HydratedDocument<Dashboard>;

@Schema()
export class Dashboard {
  @Prop({ required: true })
  name: string;
  @Prop({ default: true })
  isActive: boolean;
  @Prop({ required: true })
  priority: number;
  @Prop({ required: true })
  userId: string;
}

export const DashboardSchema = SchemaFactory.createForClass(Dashboard);
