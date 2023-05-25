import { Module } from '@nestjs/common';
import { PortfolioController } from '../controllers/portfolio.controller';

@Module({
  imports: [],
  controllers: [PortfolioController],
  providers: [],
})
export class PortfolioModule {}
