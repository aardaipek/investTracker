import { Injectable } from '@nestjs/common';
import { ActivityRepository } from '../core/repositories/activity.repository';

@Injectable()
export class ActivityService {
  constructor(private readonly activityRepository: ActivityRepository) {}

  public async createActivity(data) {
    return await this.activityRepository.createActivity(data);
  }

  public async getAllActivity(potfolioId) {
    return await this.activityRepository.getAllActivity(potfolioId);
  }
}
