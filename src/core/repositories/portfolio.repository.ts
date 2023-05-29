import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPortfolio } from '../interfaces/portfolio.interface';
import { CreatePortfolioDto } from '../dto/create.portfolio';
 
@Injectable()
export class PortfolioRepository {
    constructor(@InjectModel('portfolio') private portfolioModel: Model<IPortfolio>) {}


  public async createPortfolio(createPortfolioDto: CreatePortfolioDto): Promise<IPortfolio> {
    const newPortfolio = await new this.portfolioModel(createPortfolioDto);
    return newPortfolio.save();
  }
}
