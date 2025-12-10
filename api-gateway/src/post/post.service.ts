import { Injectable } from '@nestjs/common';
import { PostServiceGrpcClient } from 'src/grpc-services/post-service-client.service';
import { FilesService } from 'src/libs/common/services/files.service';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
    public constructor(
        private readonly postService: PostServiceGrpcClient,
        private readonly fileService: FilesService
    ) { }

    private generateUniqueKey(originalName: string): string {
        return `${Date.now()}-${Math.random().toString(36).substring(2)}-${originalName}`;
    };

    private async uploadFileIfExists(fileArray: Express.Multer.File[] | undefined): Promise<string> {
        if (!fileArray || fileArray.length === 0) {
            return '';
        }

        const file = fileArray[0];
        const uniqueKey = this.generateUniqueKey(file.originalname);
        await this.fileService.upload(uniqueKey, file.buffer);
        return uniqueKey;
    };

    // public async createPost(dto: CreatePostDto) {
    //     try {
    //         const profilePictureKey = await this.uploadFileIfExists(files.profilePicture);
    //         const backgroundPictureKey = await this.uploadFileIfExists(files.backgroundPicture);

    //         const newChannel = await lastValueFrom(this.channelService.createChannel({ userId: userId, bio: dto.bio, handle: dto.handle, name: dto.name, profilePicture: profilePictureKey, backgroundPicture: backgroundPictureKey }))
    //         return newChannel
    //     } catch (error) {
    //         return {
    //             message: [error.details],
    //             error: 'BadRequest',
    //             statusCode: 400
    //         }
    //     }
    // }

}
