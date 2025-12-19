import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { ReactionValue, VideoStatus } from 'prisma/generated';
import { lastValueFrom } from 'rxjs';
import { channelServiceGrpcClientService } from 'src/grpc/grpc-services/channel-service-grpc-client.service';
import { AddVideoToPlaylistRequest, Comment, CreateCommentRequest, CreatePlaylistRequest, CreateVideoRequest, FindPlaylistByIdRequest, FindVideoByIdRequest, GetAllChannelVideoRequest, GetAllChannelVideoResponse, GetAllVideoRequest, GetAllVideoResponse, Like, LikeVideoRequest, Playlist, PlaylistVideo, UpdateVideoStatusRequest, Video, View, WatchVideoRequest } from 'src/interfaces/video_service';
import { RedisCacheService } from 'src/libs/common/redisCache/redisCache.service';
import { mapPlaylist, mapPlaylistVideo } from 'src/libs/mapper/playlist.mapper';
import { mapComment, mapLike, mapManyVideos, mapVideo, mapView } from 'src/libs/mapper/video.mapper';
import { DatabaseService } from 'src/prisma/database.service';

@Injectable()
export class VideoService {
    constructor(
        private readonly prisma: DatabaseService,
        private readonly channelService: channelServiceGrpcClientService,
        private readonly cacheService: RedisCacheService
    ) { }


    public async createVideo(request: CreateVideoRequest): Promise<Video> {
        const channel = await lastValueFrom(this.channelService.findChannelById({ channelId: request.channelId }))

        const video = await this.prisma.video.create({
            data: {
                title: request.title,
                description: request.description,
                status: request.status === 'public' ? VideoStatus.PUBLIC : VideoStatus.LIMITED,
                channel_id: request.channelId,
                preview_url: request.previewUrl,
                video_url: request.videoUrl,
            }
        })

        await this.cacheService.del('listFirstVideos')
        await this.cacheService.del('listFirstChannelVideos')

        return mapVideo(video)
    }

    public async updateVideoStatus(request: UpdateVideoStatusRequest): Promise<Video> {
        const video = await this.findVideoById({ videoId: request.videoId })
        const channel = await lastValueFrom(this.channelService.findChannelById({ channelId: request.channelId }))

        if (video.channelId != request.channelId) {
            throw new RpcException('You cant edit this video')
        }

        const updatedVideo = await this.prisma.video.update({
            data: {
                status: request.status === 'public' ? VideoStatus.PUBLIC : VideoStatus.LIMITED
            },
            where: {
                channel_id: request.channelId,
                id: request.videoId
            }
        })

        await this.cacheService.del('listFirstVideos')
        await this.cacheService.del('listFirstChannelVideos')

        return mapVideo(updatedVideo)
    }

    public async getAllVideo(request: GetAllVideoRequest): Promise<GetAllVideoResponse> {
        console.log(request.page, request.pageSize)
        const cachedVideos: Video[] | null = await this.cacheService.get('listFirstVideos')

        if (cachedVideos) {
            return { videos: cachedVideos }
        }

        const video = await this.prisma.video.findMany({
            take: request.pageSize,
            skip: request.page * request.pageSize,
            include: {
                _count: {
                    select: {
                        comment: true,
                        likes: true,
                        view: true
                    }
                }
            }
        })

        const mappedVideos = mapManyVideos(video)

        await this.cacheService.addListFirstVideos(JSON.stringify(mappedVideos))

        return { videos: mappedVideos }
    }

    public async getAllChannelVideo(request: GetAllChannelVideoRequest): Promise<GetAllChannelVideoResponse> {

        const cachedVideos: Video[] | null = await this.cacheService.get('listFirstChannelVideos')

        if (cachedVideos) {
            return { videos: cachedVideos }
        }


        const videos = await this.prisma.video.findMany({
            where: {
                channel_id: request.channelId,
                status: VideoStatus.PUBLIC
            },
            take: request.pageSize,
            skip: request.page * request.pageSize,
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                _count: {
                    select: {
                        comment: true,
                        likes: true,
                        view: true
                    }
                }
            }
        })

        const mappedVideos = mapManyVideos(videos)

        await this.cacheService.addListFirstChannelVideos(JSON.stringify(mappedVideos))

        return { videos: mappedVideos }
    }

    public async createComment(request: CreateCommentRequest): Promise<Comment> {
        const video = await this.findVideoById({ videoId: request.videoId })
        const channel = await lastValueFrom(this.channelService.findChannelById({ channelId: request.channelId }))

        const comment = await this.prisma.comment.create({
            data: {
                channel_id: request.channelId,
                video_id: request.videoId,
                text: request.text
            }
        })

        await this.cacheService.del(`${request.videoId}`)

        return mapComment(comment)
    }

    public async likeVideo(request: LikeVideoRequest): Promise<Like> {
        const video = await this.findVideoById({ videoId: request.videoId })
        const channel = await lastValueFrom(this.channelService.findChannelById({ channelId: request.channelId }))

        const existLike = await this.prisma.like.findUnique({
            where: {
                video_id_channel_id: {
                    channel_id: request.channelId,
                    video_id: request.videoId
                }
            }
        })

        if (existLike) {
            await this.prisma.like.delete({
                where: {
                    video_id_channel_id: {
                        channel_id: request.channelId,
                        video_id: request.videoId
                    }
                }
            })
        }

        const like = await this.prisma.like.create({
            data: {
                channel_id: request.channelId,
                video_id: request.videoId,
                reaction: request.reaction === 'like' ? ReactionValue.LIKE : ReactionValue.DISLIKE
            }
        })

        await this.cacheService.del(`${request.videoId}`)

        return mapLike(like)
    }

    public async watchVideo(request: WatchVideoRequest): Promise<View> {
        const video = await this.findVideoById({ videoId: request.videoId })
        const channel = await lastValueFrom(this.channelService.findChannelById({ channelId: request.channelId }))

        const existView = await this.prisma.videoView.findUnique({
            where: {
                video_id_channel_id: {
                    channel_id: request.channelId,
                    video_id: request.videoId
                }
            }
        })

        if (existView) {
            throw new RpcException('Video already watched')
        }

        const view = await this.prisma.videoView.create({
            data: {
                channel_id: request.channelId,
                video_id: request.videoId,
            }
        })

        await this.cacheService.del(`${request.videoId}`)

        return mapView(view)
    }

    public async findVideoById(request: FindVideoByIdRequest): Promise<Video> {
        const cachedVideo: Video | null = await this.cacheService.get(request.videoId)

        if (cachedVideo) {
            return cachedVideo
        }

        const video = await this.prisma.video.findUnique({
            where: {
                id: request.videoId
            }
        })

        if (!video) {
            throw new RpcException('Video not found')
        }

        await this.cacheService.set(request.videoId, JSON.stringify(mapVideo(video)))

        return mapVideo(video)
    }

    public async createPlaylist(request: CreatePlaylistRequest): Promise<Playlist> {
        const channel = await lastValueFrom(this.channelService.findChannelById({ channelId: request.channelId }))

        const playlist = await this.prisma.playlist.create({
            data: {
                text: request.text,
                channel_id: request.channelId,
            },
            include: {
                playlist_video: true
            }
        })

        return mapPlaylist(playlist)
    }

    public async findPlaylistById(request: FindPlaylistByIdRequest): Promise<Playlist> {
        const playlist = await this.prisma.playlist.findUnique({
            where: {
                id: request.id
            },
            include: {
                playlist_video: true
            }
        })

        if (!playlist) {
            throw new RpcException('Playlist not exists')
        }

        return mapPlaylist(playlist)
    }

    public async addVideoToPlaylist(request: AddVideoToPlaylistRequest): Promise<PlaylistVideo> {
        const playlist = await this.findPlaylistById({ id: request.playlistId })
        const video = await this.findVideoById({ videoId: request.videoId })

        const maxPosResult = await this.prisma.playlistVideo.aggregate({
            where: {
                playlist_id: request.playlistId,
            },
            _max: {
                position: true
            }
        })

        const newPosition = (maxPosResult._max.position ?? 0) + 1

        const newPlaylistVideo = await this.prisma.playlistVideo.create({
            data: {
                playlist_id: request.playlistId,
                position: newPosition,
                video_id: request.videoId
            }
        })

        return mapPlaylistVideo(newPlaylistVideo)
    }

}
