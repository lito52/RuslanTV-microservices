import { Body, Controller, Get, Param, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UpdateVideoStatusDto } from './dto/update-video-status.dto';
import { getAllVideoDto } from './dto/get-all-video.dto';
import { getAllChannelVideoDto } from './dto/get-all-channel-video.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { LikeVideoDto } from './dto/like-video.dto';
import { WatchVideoDto } from './dto/watch-video.dto';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { AddVideoToPlaylistDto } from './dto/add-video-to-playlist.dto';

@Controller('video')
export class VideoController {
    constructor(private readonly videoService: VideoService) { }

    @Post('createVideo')
    @UseInterceptors(FileFieldsInterceptor([{ name: 'preview', maxCount: 1 }, { name: 'videoFile', maxCount: 1 }]))
    public async createVideo(@Body() dto: CreateVideoDto, @UploadedFiles()
    files: {
        preview: Express.Multer.File[],
        videoFile: Express.Multer.File[],
    }) {
        return await this.videoService.createVideo(dto, files)
    }

    @Post('updateVideoStatus')
    public async updateVideoStatus(@Body() dto: UpdateVideoStatusDto) {
        return await this.videoService.updateVideoStatus(dto)
    }

    @Get('findVideoById/:id')
    public async findVideoById(@Param('id') videoId: string) {
        return await this.videoService.findVideoById(videoId)
    }

    @Get('getAllVideo')
    public async getAllVideo(@Body() dto: getAllVideoDto) {
        return await this.videoService.getAllVideo(dto)
    }

    @Get('getAllChannelVideo/:id')
    public async getAllChannelVideo(@Body() dto: getAllChannelVideoDto, @Param('id') id: string) {
        return await this.videoService.getAllChannelVideo(dto, id)
    }

    @Post('createComment/:id')
    public async createComment(@Body() dto: CreateCommentDto, @Param('id') videoId: string) {
        return await this.videoService.createComment(dto, videoId)
    }

    @Post('likeVideo/:id')
    public async likeVideo(@Body() dto: LikeVideoDto, @Param('id') videoId: string) {
        return await this.videoService.likeVideo(dto, videoId)
    }

    @Post('dislikeVideo/:id')
    public async dislikeVideo(@Body() dto: LikeVideoDto, @Param('id') videoId: string) {
        return await this.videoService.dislikeVideo(dto, videoId)
    }

    @Post('watchVideo/:id')
    public async watchVideo(@Body() dto: WatchVideoDto, @Param('id') videoId: string) {
        return await this.videoService.watchVideo(dto, videoId)
    }

    @Post('createPlaylist/:id')
    public async createPlaylist(@Body() dto: CreatePlaylistDto, @Param('id') channelId: string) {
        return await this.videoService.createPlaylist(dto, channelId)
    }

    @Post('addVideoToPlaylist/:id')
    public async addVideoToPlaylist(@Body() dto: AddVideoToPlaylistDto, @Param('id') videoId: string) {
        return await this.videoService.addVideoToPlaylist(dto, videoId)
    }

    @Post('findPlaylistById/:id')
    public async findPlaylistById(@Param('id') id: string) {
        return await this.videoService.findPlaylistById(id)
    }
}
