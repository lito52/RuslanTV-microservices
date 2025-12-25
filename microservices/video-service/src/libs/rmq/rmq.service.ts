import { Global, Inject, Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';

@Global()
@Injectable()
export class RmqService {
    constructor(@Inject('RABBIT_SERVICE') private rabbitClient: ClientProxy) { }

    async emit(pattern: string, data: any) {
        console.log(`${pattern} emitted`)
        return this.rabbitClient.emit(pattern, data)
    }

    async send(pattern: string, data: any) {
        return this.rabbitClient.send(pattern, data)
    }
}
