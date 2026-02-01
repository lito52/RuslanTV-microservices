import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { GrpcClientModule } from '../grpc/grpc-modules/grpc-client.module';
import { RedisCacheModule } from '../libs/common/redisCache/redisCache.module';
import { RmqModule } from '../libs/rmq/rmq.module';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Module({
    imports: [RedisCacheModule, RmqModule, GrpcClientModule],
    controllers: [VideoController],
    providers: [VideoService, AmqpConnection],
})
export class VideoModule { }
