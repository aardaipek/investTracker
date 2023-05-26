import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MongooseConfigService } from '../config/mongo.config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
  ],
  controllers: [],
  providers: [],
})
export class ConfigurationModule {}
