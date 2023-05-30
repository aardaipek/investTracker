import { Controller, Post, Body } from '@nestjs/common';
import { DashboardService } from '../services/dashboard.service';
import { CreateDashboardDto } from '../core/dto/create.dashboard'; 
import { Logger } from '../config/logger';

@Controller('api/dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService, private logger:Logger) {
    this.logger.setContext('DashboardController');
  }

  @Post('create')
  public async CreateDashboard(@Body() data: CreateDashboardDto) {
    try {
      return await this.dashboardService.createDashboard(data);
    } catch (err) {
      this.logger.error(err);
      return err;
    }
  }
}
