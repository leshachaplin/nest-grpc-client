import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from '@nestjs/common';
import { Swagger } from './common/services/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  const swagger = new Swagger(app);

  swagger.init();
  await app.listen(3001);
  Logger.log('Micro service client is listening...');

}
bootstrap();
