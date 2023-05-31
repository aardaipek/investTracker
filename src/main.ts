import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from './config/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: new Logger(),
  });
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
