import { Injectable } from '@nestjs/common';
import { ChannelService } from 'src/channel/channel.service';
import { DatabaseService } from 'src/prisma/database.service';
import { CreatePostDto } from './dto/create-post.dto';
import { RpcException } from '@nestjs/microservices';
import { ReactionValue } from '@prisma/client';

@Injectable()
export class PostService {
    public constructor(
        private readonly prismaService: DatabaseService,
        private readonly channelService: ChannelService,
    ) { }


    public async createPost(dto: CreatePostDto, channelId: string) {
        const channel = await this.channelService.findChannelByChannelId(channelId)

        const post = await this.prismaService.post.create({
            data: {
                title: dto.title,
                description: dto.description,
                channelId: channelId
            }
        })

        return post
    }

    public async addPostMedia(url: string, postId: string) {
        const post = await this.getPostById(postId)

        const media = await this.prismaService.postMedia.create({
            data: {
                url,
                postId
            }
        })

        return media
    }

    public async deletePost(id: string, channelId: string) {
        const channel = await this.channelService.findChannelByChannelId(channelId)
        const post = await this.getPostById(id)

        if (post.channelId != channelId) {
            throw new RpcException('You dont have enough rights')
        }

        const deletedPost = await this.prismaService.post.delete({
            where: {
                id: id
            }
        })

        return {
            bool: true
        }
    }

    public async getPostById(id: string) {
        const post = await this.prismaService.post.findUnique({
            where: {
                id
            },
            include: {
                postComments: true,
                postLikes: true,
                postMedias: true,
            }
        })

        if (!post) {
            throw new RpcException('Post not found')
        }

        return post
    }

    public async getAllPosts(channelId: string) {
        const posts = await this.prismaService.post.findMany({
            where: {
                channelId: channelId
            }
        })
        return {
            posts
        }
    }

    public async ratePost(postId: string, parentId: string, rate: string) {
        const post = await this.getPostById(postId)

        const rating = await this.prismaService.postLikes.create({
            data: {
                postId,
                parentId,
                reaction: rate === 'like' ? ReactionValue.LIKE : ReactionValue.DISLIKE
            }
        })

        return rating
    }

    public async getAllPostReactions(postId: string) {
        const post = await this.getPostById(postId)

        const rates = await this.prismaService.postLikes.findMany({
            where: {
                postId
            }
        })

        return { rates }
    }

    public async commentPost(postId: string, channelId: string, parentId: string, text: string) {
        const channel = await this.channelService.findChannelByChannelId(channelId)

        const comment = await this.prismaService.postComments.create({
            data: {
                text,
                postId,
                parentId
            }
        })

        return comment
    }

    public async getAllPostComments(postId: string) {
        const comments = await this.prismaService.postComments.findMany({
            where: {
                postId
            }
        })

        return { comments }
    }

    public async getPostCommentById(id: string) {

        const comment = await this.prismaService.postComments.findUnique({
            where: {
                id
            }
        })

        if (!comment) {
            throw new RpcException('Comment not found')
        }

        return comment
    }

}
