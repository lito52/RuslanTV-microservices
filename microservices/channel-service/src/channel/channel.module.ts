import { Module } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ChannelController } from './channel.controller';
import { GrpcClientModule } from 'src/grpc/grpc-modules/grpc-client.module';

@Module({
  imports: [GrpcClientModule],
  controllers: [ChannelController],
  providers: [ChannelService],
})
export class ChannelModule { }
