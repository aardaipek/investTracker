import { Controller, Post, Body } from '@nestjs/common';
import { PortfolioService } from '../services/portfolio.service';
import { CreatePortfolioDto } from '../core/dto/create.portfolio';
import { Logger } from '../config/logger';
import { Role, Roles } from '../config/auth/guards/guard.decorators';

@Controller('api/portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService, private logger:Logger) {
    this.logger.setContext(PortfolioController.name);
  }

  @Post('create')
  public async CreatePortfolio(@Body() data: CreatePortfolioDto) {
    try {
      return await this.portfolioService.createPortfolio(data);
    } catch (err) {
      this.logger.error(err);
      return err;
    }
  }

  @Post('getPortfolio')
  @Roles(Role.User)
  public async GetPortfolio(@Body() data) {
    try {
      return await this.portfolioService.getPortfolioById(data.id);// TODO Refactor needed
    } catch (err) {
      this.logger.error(err);
      return err;
    }
  }

  @Post('getAllPortfolio')
  @Roles(Role.User)
  public async GetAllPortfolio(@Body() data) {
    try {
      return await this.portfolioService.getAllPortfolio(data.dashboardId);// TODO Refactor needed
    } catch (err) {
      this.logger.error(err);
      return err;
    }
  }
}
