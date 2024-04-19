import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(bodyParser.json({ type: 'application/json' }));

  console.log(process.env.PORT);
  await app.listen(process.env.PORT || 4000);
}

bootstrap();
