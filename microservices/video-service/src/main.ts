import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import 'dotenv/config';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: process.env.VIDEO_SERVICE_URL || '0.0.0.0:50053',
        package: 'video_service',
        protoPath: join(__dirname, '../src/_proto/video_service.proto'),
        loader: {
          includeDirs: [join(__dirname, '../src', '_proto')],
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
