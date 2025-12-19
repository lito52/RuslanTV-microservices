import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { VideoServiceGrpcClient } from 'src/grpc-services/video-service-client.service';
import { CreateVideoRequest, FindVideoByIdRequest, GetAllVideoRequest, LikeVideoRequest, UpdateVideoStatusRequest } from 'src/interfaces/video_service';
import { FilesService } from 'src/libs/common/services/files.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoStatusDto } from './dto/update-video-status.dto';
import { getAllVideoDto } from './dto/get-all-video.dto';
import { getAllChannelVideoDto } from './dto/get-all-channel-video.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { LikeVideoDto } from './dto/like-video.dto';
import { WatchVideoDto } from './dto/watch-video.dto';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { AddVideoToPlaylistDto } from './dto/add-video-to-playlist.dto';

@Injectable()
export class VideoService {
    constructor(
        private readonly videoService: VideoServiceGrpcClient,
        private readonly fileService: FilesService,
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

    public async createVideo(request: CreateVideoDto, files: { preview: Express.Multer.File[], videoFile: Express.Multer.File[] }) {
        try {
            const previewUrl = await this.uploadFileIfExists(files.preview);
            const videoUrl = await this.uploadFileIfExists(files.videoFile);

            const video = await lastValueFrom(this.videoService.createVideo({ title: request.title, description: request.description, channelId: request.channelId, status: 'limited', previewUrl: previewUrl, videoUrl: videoUrl }))
            return video
        } catch (error) {
            console.log(error.message)
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async updateVideoStatus(request: UpdateVideoStatusDto) {
        try {
            const video = await lastValueFrom(this.videoService.updateVideoStatus(request))
            return video
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async findVideoById(videoId: string) {
        try {
            const video = await lastValueFrom(this.videoService.findVideoById({ videoId: videoId }))
            return video
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async getAllVideo(dto: getAllVideoDto) {
        try {
            const video = await lastValueFrom(this.videoService.getAllVideo({ page: dto.page, pageSize: dto.pageSize, }))
            return video
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async getAllChannelVideo(dto: getAllChannelVideoDto, id: string) {
        try {
            const video = await lastValueFrom(this.videoService.getAllChannelVideo({ page: dto.page, pageSize: dto.pageSize, channelId: id }))
            return video
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async createComment(dto: CreateCommentDto, videoId: string) {
        try {
            const comment = await lastValueFrom(this.videoService.createComment({ text: dto.text, channelId: dto.channelId, videoId: videoId }))
            return comment
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async likeVideo(dto: LikeVideoDto, videoId: string) {
        try {
            const video = await lastValueFrom(this.videoService.likeVideo({ reaction: 'like', channelId: dto.channelId, videoId: videoId }))
            return video
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async dislikeVideo(dto: LikeVideoDto, videoId: string) {
        try {
            const video = await lastValueFrom(this.videoService.likeVideo({ reaction: 'dislike', channelId: dto.channelId, videoId: videoId }))
            return video
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async watchVideo(dto: WatchVideoDto, videoId: string) {
        try {
            const video = await lastValueFrom(this.videoService.watchVideo({ channelId: dto.channelId, videoId: videoId }))
            return video
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async createPlaylist(dto: CreatePlaylistDto, channelId: string) {
        try {
            const playlist = await lastValueFrom(this.videoService.createPlaylist({ channelId: channelId, text: dto.text }))
            return playlist
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async addVideoToPlaylist(dto: AddVideoToPlaylistDto, videoId: string) {
        try {
            const video = await lastValueFrom(this.videoService.addVideoToPlaylist({ playlistId: dto.playlistId, videoId: videoId }))
            return video
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async findPlaylistById(id: string) {
        try {
            const playlist = await lastValueFrom(this.videoService.findPlaylistById({ id: id }))
            return playlist
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

}
