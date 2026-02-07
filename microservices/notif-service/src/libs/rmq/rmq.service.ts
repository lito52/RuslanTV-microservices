import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RmqService {
    @RabbitRPC({
        exchange: 'exchange1',
        routingKey: 'video-published',
        queue: 'video-queue',
    })
    public async videoPublishedNotif(msg: object) {
        return msg
    }
}