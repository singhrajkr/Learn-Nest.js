import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Validation Pipe whitelist: true removes unknown property from request payload
  // Validation Pipe forbidNonWhitelisted: true stops processing request when unknown property in passed in request payload
  // Validation Pipe transform: true transform request payload to DTO instance and even it will transform the query parameter to defined type from string(all request comes from network are string by default)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true
  }));
  await app.listen(3000);
}
bootstrap();
