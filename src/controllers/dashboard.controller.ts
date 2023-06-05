import { Controller, Post, Body } from '@nestjs/common';
import { DashboardService } from '../services/dashboard.service';
import { CreateDashboardDto } from '../core/dto/create.dashboard'; 
import { Logger } from '../config/logger';
import { Role, Roles } from '../config/auth/guards/guard.decorators';

@Controller('api/dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService, private logger:Logger) {
    this.logger.setContext(DashboardController.name);
  }

  @Post('create')
  @Roles(Role.User)
  public async CreateDashboard(@Body() data: CreateDashboardDto) {
    try {
      return await this.dashboardService.createDashboard(data);
    } catch (err) {
      this.logger.error(err);
      return err;
    }
  }

  @Post('getUserDashboards')
  @Roles(Role.User)
  public async GetUserDashboards(@Body() data: any) {
    try {
      return await this.dashboardService.getUserDashboards(data.userId);
    } catch (err) {
      this.logger.error(err);
      return err;
    }
  }

  @Post('getDashboard')
  @Roles(Role.User)
  public async GetDashboard(@Body() data: any) {
    try {
      return await this.dashboardService.getDashboard(data.dashboardId);
    } catch (err) {
      this.logger.error(err);
      return err;
    }
  }
}
