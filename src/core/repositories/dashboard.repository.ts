import { Injectable, NotFoundException } from '@nestjs/common';
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

  public async getUserDashboards(userId: string): Promise<IDashboard[]> {
    const dashboards = await this.dashboardModel.find({userId:userId}).exec();
    return dashboards;
  }

  public async getDashboard(dashboardId: string): Promise<IDashboard> {
    const dashboard =  await this.dashboardModel.findOne({_id:dashboardId}).exec();
    return dashboard;
  }
}
