import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session';
import { createClient } from 'redis'
import { RedisStore } from 'connect-redis'

import { AppModule } from './app.module';
import { ms, StringValue } from './libs/common/utils/ms.util';
import { parseBoolean } from './libs/common/utils/parse-boolean.util';
import { LoggingInterceptor } from './libs/common/logging.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		bufferLogs: true
	});

	const config = app.get(ConfigService)
	const redisPort = `redis://${config.getOrThrow<string>('REDIS_USER')}:${config.getOrThrow<string>('REDIS_PASSWORD')}@${config.getOrThrow<string>('REDIS_HOST')}:${config.getOrThrow<number>('REDIS_PORT')}`
	const redis = createClient({ url: redisPort })
	await redis.connect()

	const swaggerConfig = new DocumentBuilder()
		.setTitle('api-gateway')
		.setDescription('Api-gateways api doc')
		.setVersion('1.0')
		.setContact('RuslanTV Team', 'https://github.com/lito52', 'mirzakaevruslan3@gmail.com')
		.build()

	const documentFactory = () => SwaggerModule.createDocument(app, swaggerConfig)
	SwaggerModule.setup('/docs', app, documentFactory)

	app.use(cookieParser(config.getOrThrow<string>('COOKIES_SECRET')))

	app.useGlobalPipes(
		new ValidationPipe({
			transform: true
		})
	)

	app.use(
		session({
			secret: config.getOrThrow<string>('SESSION_SECRET'),
			name: config.getOrThrow<string>('SESSION_NAME'),
			resave: true,
			saveUninitialized: false,
			cookie: {
				domain: config.getOrThrow<string>('SESSION_DOMAIN'),
				maxAge: ms(config.getOrThrow<StringValue>('SESSION_MAX_AGE')),
				httpOnly: parseBoolean(config.getOrThrow<string>('SESSION_HTTP_ONLY')),
				secure: parseBoolean(config.getOrThrow<string>('SESSION_SECURE')),
				sameSite: 'lax'
			},
			store: new RedisStore({
				client: redis,
				prefix: config.getOrThrow<string>('SESSION_FOLDER'),
			})
		})
	)

	app.enableCors({
		origin: config.getOrThrow<string>('ALLOWED_ORIGIN'),
		credentials: true,
		exposedHeaders: ['set-cookie']
	})

	const port = config.getOrThrow<number>('APPLICATION_PORT')
	await app.listen(port ?? 3003);

	console.log('api gateway is working on port:', port)
}
bootstrap();
