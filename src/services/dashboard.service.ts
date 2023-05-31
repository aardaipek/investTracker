import { Injectable } from '@nestjs/common';
import { DashboardRepository } from '../core/repositories/dashboard.repository';

@Injectable()
export class DashboardService {
  constructor(private readonly dashboardRepository: DashboardRepository) {}

  public async createDashboard(data) {
    return await this.dashboardRepository.createDashbaord(data);
  }
  public async getUserDashboards(userId) {
    return await this.dashboardRepository.getUserDashboards(userId);
  }

  public async getDashboard(dashboardId) {
    return await this.dashboardRepository.getDashboard(dashboardId);
  }
}
