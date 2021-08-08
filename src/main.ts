import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  // app.useGlobalInterceptors(new TimeoutInterceptor());
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(PORT, () => console.log(`start server on ${PORT}`));
}
bootstrap();
