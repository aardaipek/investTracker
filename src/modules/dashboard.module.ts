import { Module } from '@nestjs/common';
import { DashboardController } from '../controllers/dashboard.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardSchema } from '../core/schemas/dashboard.schema';
import { DashboardService } from '../services/dashboard.service';
import { DashboardRepository } from '../core/repositories/dashboard.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'dashboard', schema: DashboardSchema }]),
  ],
  controllers: [DashboardController],
  providers: [DashboardService,DashboardRepository],
})
export class DashboardModule {}
