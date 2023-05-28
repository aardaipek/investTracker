import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDashboardDto } from '../dto/create.dashboard';
import { IDashboard } from '../interfaces/dashboard.interface';

@Injectable()
export class DashboardRepository {
  constructor(@InjectModel('dashboard') private dashboardModel: Model<IDashboard>) {}

  public async createDashbaord(createDashboardDto: CreateDashboardDto): Promise<IDashboard> {
    const newDashbaord = await new this.dashboardModel(createDashboardDto);
    return newDashbaord.save();
  }
}