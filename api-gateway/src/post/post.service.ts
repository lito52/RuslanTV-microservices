import { Injectable } from '@nestjs/common';
import { PostServiceGrpcClient } from 'src/grpc-services/post-service-client.service';
import { FilesService } from 'src/libs/common/services/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { lastValueFrom } from 'rxjs';
import { Rates } from './types/post-types';

@Injectable()
export class PostService {
    public constructor(
        private readonly postService: PostServiceGrpcClient,
        private readonly fileService: FilesService
    ) { }

    public async createPost(dto: CreatePostDto) {
        try {
            const post = await lastValueFrom(this.postService.createPost({ text: dto.text, channelId: dto.channelId }))
            return post
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async addPostMedia(file: Express.Multer.File, postId: string) {
        try {
            const uniqueKey = `${Date.now()}-${Math.random().toString(36).substring(2)}-${file.originalname}`
            await this.fileService.upload(uniqueKey, file.buffer);

            const picture = await lastValueFrom(this.postService.addPostMedia({ url: uniqueKey, postId: postId }))
            return picture
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }


    public async getPostById(postId: string) {
        try {
            const post = await lastValueFrom(this.postService.getPostById({ id: postId }))
            return post
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }


    public async getAllPosts(channelId: string, take: number = 10, skip: number = 0) {
        try {
            const posts = await lastValueFrom(this.postService.getAllPosts({ channelId: channelId, take: take, skip: skip }))
            return posts
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async ratePost(postId: string, parentId: string, rating: Rates) {
        try {
            const rate = await lastValueFrom(this.postService.ratePost({ postId: postId, parentId: parentId, rate: rating }))
            return rate
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async commentPost(postId: string, parentId: string, text: string) {
        try {
            const comment = await lastValueFrom(this.postService.commentPost({ parentId: parentId, postId: postId, text: text }))
            return comment
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }
}
