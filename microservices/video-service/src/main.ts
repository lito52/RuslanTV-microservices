import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import 'dotenv/config';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';
import { GrpcMetricsInterceptor } from './libs/metrics.interceptor';
import { CustomLogger } from './libs/logging/logger.service';

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
  app.useGlobalPipes(new ValidationPipe())

  const metricsInterceptor = app.get(GrpcMetricsInterceptor)
  app.useGlobalInterceptors(metricsInterceptor)

  app.useLogger(new CustomLogger())

  await app.listen();
}
bootstrap();
