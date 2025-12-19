import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { IS_DEV_ENV } from './libs/common/utils/is-dev.util';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './libs/common/logging.interceptor';
import { ChannelModule } from './channel/channel.module';
import { PostModule } from './post/post.module';
import { VideoModule } from './video/video.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			ignoreEnvFile: !IS_DEV_ENV
		}),
		PrometheusModule.register(),
		AuthModule,
		ChannelModule,
		PostModule,
		VideoModule,
	],
	controllers: [],
	providers: [
		{
			provide: APP_INTERCEPTOR,
			useClass: LoggingInterceptor
		}
	],
})
export class AppModule { }
