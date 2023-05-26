import { Module } from '@nestjs/common';
import { PortfolioController } from '../controllers/portfolio.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PortfolioSchema } from '../core/schemas/portfolio.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'portfolio', schema: PortfolioSchema }]),
  ],
  controllers: [PortfolioController],
  providers: [],
})
export class PortfolioModule {}
