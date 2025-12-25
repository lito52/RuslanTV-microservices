import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IS_DEV_ENV } from './libs/utils/is-dev.util';
import { PrismaModule } from './prisma/prisma.module';
import { VideoModule } from './video/video.module';
import { MetricsService } from './libs/metrics.service';
import { GrpcMetricsInterceptor } from './libs/metrics.interceptor';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { RmqModule } from './libs/rmq/rmq.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: !IS_DEV_ENV
    }),
    PrometheusModule.register({
      defaultLabels: {
        service: 'channel-service',
        env: process.env.NODE_ENV
      },
      pushgateway: {
        url: IS_DEV_ENV ? 'http://localhost:9091' : 'http://pushgateway:9091'
      },
    }),
    PrismaModule,
    VideoModule,
    RmqModule,
  ],
  providers: [
    MetricsService,
    GrpcMetricsInterceptor
  ],
  exports: [
    MetricsService,
    GrpcMetricsInterceptor
  ]
})
export class AppModule { }
