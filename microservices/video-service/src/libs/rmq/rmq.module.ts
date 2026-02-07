import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq'
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        RabbitMQModule.forRootAsync({
            imports: [ConfigModule.forRoot()],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                uri: configService.get('RABBITMQ_URL'),
                connectionInitOptions: { wait: false },
                exchanges: [
                    {
                        name: 'exchange1',
                        type: 'topic'
                    },
                ],
                channels: {
                    'channel-1': {
                        prefetchCount: 15,
                        default: true
                    },
                },
            }),
        }),
        RmqModule
    ],
    providers: [],
    exports: []
})

export class RmqModule { }
