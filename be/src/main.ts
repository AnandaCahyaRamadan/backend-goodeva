import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Aktifkan validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Aktifkan CORS
  app.enableCors({
    origin: '*',
    methods: 'GET,POST,PATCH,DELETE',
  });

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
