import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IActivity } from '../interfaces/activity.interface';
import { CreateActivityDto } from '../dto/create.activity';

@Injectable()
export class ActivityRepository {
  constructor(@InjectModel('activity') private activityModel: Model<IActivity>,) {}

  public async createActivity(createActivityDto: CreateActivityDto): Promise<IActivity> {
    const newActivity = await new this.activityModel(createActivityDto);
    return newActivity.save();
  }

  public async getAllActivity(portfolioId: string): Promise<IActivity[]> {
    const activities = await this.activityModel.find({portfolioId:portfolioId}).exec();
    return activities;
  }
}
