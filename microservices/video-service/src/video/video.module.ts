import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { GrpcClientModule } from 'src/grpc/grpc-modules/grpc-client.module';
import { RedisCacheModule } from 'src/libs/common/redisCache/redisCache.module';

@Module({
  imports: [GrpcClientModule, RedisCacheModule],
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideoModule { }
