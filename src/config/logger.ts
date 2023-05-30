import { ConsoleLogger } from '@nestjs/common';

export class Logger extends ConsoleLogger {
  warn(message: any, stack?: string, context?: string) {
    super.warn(message);
  }
  error(message: any, stack?: string, context?: string) {
    super.error(message);
  }
  log(message: any, stack?: string, context?: string) {
    super.log(message);
  }
}