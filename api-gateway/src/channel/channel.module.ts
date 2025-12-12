import { Module } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ChannelController } from './channel.controller';
import { ClientsModule } from '@nestjs/microservices';
import { channelServiceGrpcClientOptions } from 'src/grpc-clients-options/channel-grpc-client.config';
import { ChannelServiceGrpcClient } from 'src/grpc-services/channel-service-client.service';
import { FilesService } from 'src/libs/common/services/files.service';

@Module({
  imports: [ClientsModule.register([channelServiceGrpcClientOptions])],
  controllers: [ChannelController],
  providers: [ChannelService, ChannelServiceGrpcClient, FilesService],
  exports: [ChannelService]
})
export class ChannelModule { }
