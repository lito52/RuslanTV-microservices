import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ChannelServiceGrpcClientService } from '../grpc-services/channel-service-grpc-client.service';
import { channelServiceGrpcClientOptions } from '../grpc-client-options/channel-grpc-client.config';

@Module({
    imports: [
        ClientsModule.register([channelServiceGrpcClientOptions])
    ],
    providers: [ChannelServiceGrpcClientService],
    exports: [ChannelServiceGrpcClientService]
})
export class GrpcClientModule { }