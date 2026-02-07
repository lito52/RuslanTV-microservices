import { Module } from '@nestjs/common';
import { ChannelModule } from './channel/channel.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';
import { IS_DEV_ENV } from './libs/common/utils/is-dev.util';
import { MetricsService } from './libs/common/metrics.service';
import { GrpcMetricsInterceptor } from './libs/common/metrics.interceptor';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

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
        ChannelModule,
        PrismaModule,
        PostModule,
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
