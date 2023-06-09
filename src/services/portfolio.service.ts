import { Injectable } from '@nestjs/common';
import { PortfolioRepository } from '../core/repositories/portfolio.repository';

@Injectable()
export class PortfolioService {
  constructor(private readonly portfolioRepository: PortfolioRepository) {}

  public async createPortfolio(data) {
    return await this.portfolioRepository.createPortfolio(data);
  }

  public async getPortfolioById(id) {
    return await this.portfolioRepository.getPortfolioById(id);
  }

  public async getAllPortfolio(dashboardId) {
    return await this.portfolioRepository.getAllPortfolio(dashboardId);
  }
}
