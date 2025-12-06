import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { ChannelService } from 'src/channel/channel.service';
import { DatabaseService } from 'src/prisma/database.service';
import { GrpcClientModule } from 'src/grpc/grpc-modules/grpc-client.module';

@Module({
  imports: [GrpcClientModule],
  controllers: [PostController],
  providers: [PostService, ChannelService, DatabaseService],
})
export class PostModule { }
