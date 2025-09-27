import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';
import { Logger, ValidationPipe } from '@nestjs/common';
import { CustomLogger } from './libs/common/logging/logger.service';
import { GrpcMetricsInterceptor } from './libs/common/metrics.interceptor';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: process.env.AUTH_SERVICE_URL || '0.0.0.0:50051',
      package: 'user_service',
      protoPath: path.join(__dirname, '../src/proto/auth_service.proto'),
      loader: {
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
