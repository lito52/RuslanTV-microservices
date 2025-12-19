import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { videoServiceGrpcClientOptions } from 'src/grpc-clients-options/video-grpc-client.config';
import { ClientsModule } from '@nestjs/microservices';
import { VideoServiceGrpcClient } from 'src/grpc-services/video-service-client.service';
import { FilesService } from 'src/libs/common/services/files.service';

@Module({
  imports: [ClientsModule.register([videoServiceGrpcClientOptions])],
  controllers: [VideoController],
  providers: [VideoService, VideoServiceGrpcClient, FilesService],
})
export class VideoModule { }
