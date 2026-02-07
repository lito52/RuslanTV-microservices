import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import 'dotenv/config';

async function bootstrap() {

    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,
        {
            transport: Transport.RMQ,
            options: {
                url: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
                queue: 'video_queue',
                queueOptions: {
                    durable: false
                }
            },
        });


    await app.listen();
}
bootstrap();
