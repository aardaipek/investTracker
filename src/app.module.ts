import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortfolioModule } from './modules/portfolio.module';
import { ActivityModule } from './modules/activity.module';
import { DashboardModule } from './modules/dashboard.module';
import { UserModule } from './modules/user.module';
import { ConfigurationModule } from './modules/config.module';
import { AuthModule } from './modules/auth.module';
import { ConstantService } from './config/constant.service';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './config/auth/guards/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ConfigurationModule,
    AuthModule,
    PortfolioModule,
    ActivityModule,
    DashboardModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ConstantService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
