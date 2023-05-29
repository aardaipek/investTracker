import { Controller, Post, Body } from '@nestjs/common';
import { PortfolioService } from '../services/portfolio.service';
import { CreatePortfolioDto } from '../core/dto/create.portfolio';

@Controller('api/portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Post('create')
  public async CreatePortfolio(@Body() data: CreatePortfolioDto) {
    try {
      return await this.portfolioService.createPortfolio(data);
    } catch (err) {
      return err;
    }
  }

  @Post('getPortfolio')
  public async GetPortfolio(@Body() data) {
    try {
      return await this.portfolioService.getPortfolioById(data.id);// TODO Refactor needed
    } catch (err) {
      return err;
    }
  }
}
