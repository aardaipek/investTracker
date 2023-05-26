import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DB_CONFIG } from './index';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
    constructor(private readonly configService: ConfigService) {}

    public createMongooseOptions(): MongooseModuleOptions {
        return {
          uri: this.configService.get<string>('MONGO_CONNECTION_STRING'),
        };
      }
}
