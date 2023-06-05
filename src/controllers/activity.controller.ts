import { Controller, Post, Body } from '@nestjs/common';
import { CreateActivityDto } from '../core/dto/create.activity';
import { ActivityService } from '../services/activity.service';
import { Logger } from '../config/logger';
import { Role, Roles } from '../config/auth/guards/guard.decorators';

@Controller('api/activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService, private logger:Logger) {
    this.logger.setContext(ActivityController.name);
  }

  @Post('create')
  @Roles(Role.User)
  public async CreateActivity(@Body() data: CreateActivityDto) {
    try {
      return await this.activityService.createActivity(data);
    } catch (err) {
      this.logger.error(err);
      return err;
    }
  }

  @Post('getAllActivity')
  @Roles(Role.User)
  public async GetAllActivity(@Body() data) {
    try {
      return await this.activityService.getAllActivity(data.portfolioId);
    } catch (err) {
      this.logger.error(err);
      return err;
    }
  }
}
