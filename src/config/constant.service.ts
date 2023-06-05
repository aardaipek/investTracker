import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConstantService {
  configService: ConfigService = new ConfigService();
  
  constructor() {}

  getConstants() {
    return {
      mongoConnectionUri: this.configService.get<string>('MONGO_CONNECTION_STRING'),
      jwtSecret: this.configService.get<string>('JWT_SECRET'),
      jwtExpireIn: this.configService.get<string>('JWT_EXPIRE'),
    };
  }
}
