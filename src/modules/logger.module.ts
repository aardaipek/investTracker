import { Module } from '@nestjs/common';
import { Logger } from '../config/logger';

@Module({
  providers: [Logger],
  exports: [Logger],
})
export class LoggerModule {}
