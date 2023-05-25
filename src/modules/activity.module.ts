import { Module } from '@nestjs/common';
import { ActivityController } from '../controllers/activity.controller';

@Module({
  imports: [],
  controllers: [ActivityController],
  providers: [],
})
export class ActivityModule {}
