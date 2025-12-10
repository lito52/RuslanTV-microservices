import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { ClientsModule } from '@nestjs/microservices';
import { postServiceGrpcClientOptions } from 'src/grpc-clients-options/post-grpc-client.config';
import { FilesService } from 'src/libs/common/services/files.service';
import { PostServiceGrpcClient } from 'src/grpc-services/post-service-client.service';

@Module({
  imports: [ClientsModule.register([postServiceGrpcClientOptions])],
  controllers: [PostController],
  providers: [PostService, PostServiceGrpcClient, FilesService],
})
export class PostModule { }
