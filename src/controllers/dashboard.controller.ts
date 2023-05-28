import { Controller, Post, Body } from '@nestjs/common';
import { DashboardService } from '../services/dashboard.service';
import { CreateDashboardDto } from '../core/dto/create.dashboard'; 

@Controller('api/dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Post('create')
  public async CreateDashboard(@Body() data: CreateDashboardDto) {
    try {
      return await this.dashboardService.createDashboard(data);
    } catch (err) {
      return err;
    }
  }
}
