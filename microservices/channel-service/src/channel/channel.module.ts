import { Module } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ChannelController } from './channel.controller';
import { GrpcClientModule } from 'src/grpc/grpc-modules/grpc-client.module';
import { DatabaseService } from 'src/prisma/database.service';

@Module({
  imports: [GrpcClientModule],
  controllers: [ChannelController],
  providers: [ChannelService, DatabaseService],
  exports: [ChannelService]
})
export class ChannelModule { }
