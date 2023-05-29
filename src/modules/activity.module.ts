import { Module } from '@nestjs/common';
import { ActivityController } from '../controllers/activity.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivitySchema } from '../core/schemas/activity.schema';
import { ActivityService } from '../services/activity.service';
import { ActivityRepository } from '../core/repositories/activity.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'activity', schema: ActivitySchema }]),
  ],
  controllers: [ActivityController],
  providers: [ActivityService,ActivityRepository],
})
export class ActivityModule {}
