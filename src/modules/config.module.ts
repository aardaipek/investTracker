import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MongooseConfigService } from '../config/mongo.config.service';
import { ConstantService } from '../config/constant.service';


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
  providers: [ConstantService],
  exports:[ConstantService]
})
export class ConfigurationModule {}
