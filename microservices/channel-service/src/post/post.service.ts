import { Injectable } from '@nestjs/common';
import { ChannelService } from '../channel/channel.service';
import { DatabaseService } from '../prisma/database.service';
import { RpcException } from '@nestjs/microservices';
import { ReactionValue } from '@prisma/client';
import { Comment, CreatePostRequest, GetAllPostsResponse, Like, Media, Post } from '../interfaces/post_service';
import { mapComment, mapLike, mapManyPosts, mapMedia, mapPost } from '../libs/common/mapper/post.mapper';

@Injectable()
export class PostService {
    public constructor(
        private readonly prismaService: DatabaseService,
        private readonly channelService: ChannelService,
    ) { }


    public async createPost(dto: CreatePostRequest): Promise<Post> {
        const channel = await this.channelService.findChannelByChannelId(dto.channelId)

        const post = await this.prismaService.post.create({
            data: {
                text: dto.text,
                channelId: dto.channelId,
            },
            include: {
                postComments: true,
                postLikes: true,
                postMedias: true
            }
        })

        return mapPost(post)
    }

    public async addPostMedia(url: string, postId: string): Promise<Media> {
        const post = await this.getPostById(postId)

        const media = await this.prismaService.postMedia.create({
            data: {
                url,
                postId
            }
        })

        return mapMedia(media)
    }

    // public async deletePost(id: string, channelId: string): Promise<Boolean> {
    //     const channel = await this.channelService.findChannelByChannelId(channelId)
    //     const post = await this.getPostById(id)

    //     if (post.channelId != channelId) {
    //         throw new RpcException('You dont have enough rights')
    //     }

    //     const deletedPost = await this.prismaService.post.delete({
    //         where: {
    //             id: id
    //         }
    //     })

    //     return {
    //         bool: true
    //     }
    // }

    public async getPostById(id: string): Promise<Post> {
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

        return mapPost(post)
    }

    public async getAllPosts(channelId: string): Promise<GetAllPostsResponse> {
        const posts = await this.prismaService.post.findMany({
            where: {
                channelId: channelId
            },
            include: {
                postComments: true,
                postLikes: true,
                postMedias: true
            }
        })
        return { posts: mapManyPosts(posts) }

    }

    public async ratePost(postId: string, parentId: string, rate: string): Promise<Like> {
        const post = await this.getPostById(postId)

        const rating = await this.prismaService.postLikes.create({
            data: {
                postId,
                parentId,
                reaction: rate === 'like' ? ReactionValue.LIKE : ReactionValue.DISLIKE
            }
        })

        return mapLike(rating)
    }

    // public async getAllPostReactions(postId: string) {
    //     const post = await this.getPostById(postId)

    //     const rates = await this.prismaService.postLikes.findMany({
    //         where: {
    //             postId
    //         }
    //     })

    //     return { rates }
    // }

    public async commentPost(postId: string, parentId: string, text: string): Promise<Comment> {
        const comment = await this.prismaService.postComments.create({
            data: {
                text,
                postId,
                parentId
            }
        })

        return mapComment(comment)
    }

    // public async getAllPostComments(postId: string) {
    //     const comments = await this.prismaService.postComments.findMany({
    //         where: {
    //             postId
    //         }
    //     })

    //     return { comments }
    // }

    // public async getPostCommentById(id: string) {

    //     const comment = await this.prismaService.postComments.findUnique({
    //         where: {
    //             id
    //         }
    //     })

    //     if (!comment) {
    //         throw new RpcException('Comment not found')
    //     }

    //     return comment
    // }

}
