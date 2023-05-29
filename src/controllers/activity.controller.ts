import { Controller, Post, Body } from '@nestjs/common';
import { CreateActivityDto } from '../core/dto/create.activity';
import { ActivityService } from '../services/activity.service';

@Controller('api/activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post('create')
  public async CreateActivity(@Body() data: CreateActivityDto) {
    try {
      return await this.activityService.createActivity(data);
    } catch (err) {
      return err;
    }
  }
}
