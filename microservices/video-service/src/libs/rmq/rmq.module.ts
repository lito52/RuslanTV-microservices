import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RmqService } from './rmq.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'RABBIT_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5672'],
                    queue: 'videos_queue',
                    queueOptions: {
                        durable: true
                    },

                },
            },
        ]),
    ],
    providers: [RmqService],
    exports: [RmqService]

})

export class RmqModule { }
