import { Module } from '@nestjs/common';
import { ActivityController } from '../controllers/activity.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivitySchema } from '../core/schemas/activity.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'activity', schema: ActivitySchema }]),
  ],
  controllers: [ActivityController],
  providers: [],
})
export class ActivityModule {}
