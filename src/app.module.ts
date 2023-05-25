import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_CONFIG } from './config';
import { PortfolioModule } from './modules/portfolio.module';
import { ActivityModule } from './modules/activity.module';
import { DashboardModule } from './modules/dashboard.module';
import { UserModule } from './modules/user.module';


@Module({
  imports: [
    MongooseModule.forRoot(DB_CONFIG.mongoConnectionString),
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
