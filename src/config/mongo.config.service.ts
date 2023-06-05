import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions, MongooseOptionsFactory} from '@nestjs/mongoose';
import { ConstantService } from './constant.service';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
    constructor() {}

    public createMongooseOptions(): MongooseModuleOptions {
        return {
          uri: (new ConstantService().getConstants()).mongoConnectionUri,
        };
      }
}
