import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { channelServiceGrpcClientOptions } from '../grpc-client-options/channel-grpc-client.config';
import { channelServiceGrpcClientService } from '../grpc-services/channel-service-grpc-client.service';
@Module({
    imports: [
        ClientsModule.register([channelServiceGrpcClientOptions])
    ],
    providers: [channelServiceGrpcClientService],
    exports: [channelServiceGrpcClientService]
})
export class GrpcClientModule { }