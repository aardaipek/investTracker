import { Module } from '@nestjs/common';
import { DashboardController } from '../controllers/dashboard.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardSchema } from '../core/schemas/dashboard.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'dashboard', schema: DashboardSchema }]),
  ],
  controllers: [DashboardController],
  providers: [],
})
export class DashboardModule {}
