import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: process.env.CHANNEL_SERVICE_URL || '0.0.0.0:50052',
      package: 'channel_service',
      protoPath: join(__dirname, '../src/_proto/channel_service.proto'),
      loader: {
        enums: String,
        objects: true,
        arrays: true,
        keepCase: true,
      }
    },
  });
  await app.listen();
}
bootstrap();
