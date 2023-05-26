import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortfolioModule } from './modules/portfolio.module';
import { ActivityModule } from './modules/activity.module';
import { DashboardModule } from './modules/dashboard.module';
import { UserModule } from './modules/user.module';
import { ConfigurationModule } from './modules/config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config/mongo.config.service';
@Module({
  imports: [
    ConfigurationModule,
    PortfolioModule,
    ActivityModule,
    DashboardModule,
    UserModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService],
})
export class AppModule {}
