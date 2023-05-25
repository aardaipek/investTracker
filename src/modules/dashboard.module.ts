import { Module } from '@nestjs/common';
import { DashboardController } from '../controllers/dashboard.controller';

@Module({
  imports: [],
  controllers: [DashboardController],
  providers: [],
})
export class DashboardModule {}
