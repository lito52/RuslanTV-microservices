import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { GrpcClientModule } from 'src/grpc/grpc-modules/grpc-client.module';

@Module({
  imports: [GrpcClientModule],
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideoModule { }
