import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPortfolio } from '../interfaces/portfolio.interface';
import { CreatePortfolioDto } from '../dto/create.portfolio';

@Injectable()
export class PortfolioRepository {
  constructor(@InjectModel('portfolio') private portfolioModel: Model<IPortfolio>,) {}

  public async createPortfolio(createPortfolioDto: CreatePortfolioDto): Promise<IPortfolio> {
    const newPortfolio = await new this.portfolioModel(createPortfolioDto);
    return newPortfolio.save();
  }

  public async getPortfolioById(id: string): Promise<IPortfolio> {
    const existingPortfolio = await this.portfolioModel.findById(id).exec();
    if (!existingPortfolio) {
      throw new NotFoundException(`Portfolio #${id} not found`);
    }
    return existingPortfolio;
  }
}
