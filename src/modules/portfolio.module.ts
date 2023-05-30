import { Module } from '@nestjs/common';
import { PortfolioController } from '../controllers/portfolio.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PortfolioSchema } from '../core/schemas/portfolio.schema';
import { PortfolioRepository } from '../core/repositories/portfolio.repository';
import { PortfolioService } from '../services/portfolio.service';
import { LoggerModule } from './logger.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'portfolio', schema: PortfolioSchema }]),
    LoggerModule,
  ],
  controllers: [PortfolioController],
  providers: [PortfolioService,PortfolioRepository],
})
export class PortfolioModule {}
