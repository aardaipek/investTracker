import { Injectable } from '@nestjs/common';
import { DashboardRepository } from '../core/repositories/dashboard.repository';

@Injectable()
export class DashboardService {
  constructor(private readonly dashboardRepository: DashboardRepository) {}

  public async createDashboard(data) {
    return await this.dashboardRepository.createDashbaord(data);
  }
  public async getDashboards(userId) {
    return await this.dashboardRepository.getDashboard(userId);
  }
}
