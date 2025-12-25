import { Controller } from '@nestjs/common';
import { VideoService } from './video.service';
import { AddVideoToPlaylistRequest, Boolean, Comment, CreateCommentRequest, CreatePlaylistRequest, CreateVideoRequest, FindPlaylistByIdRequest, FindVideoByIdRequest, GetAllChannelVideoRequest, GetAllChannelVideoResponse, GetAllVideoRequest, GetAllVideoResponse, Like, LikeVideoRequest, Playlist, PlaylistVideo, PublishVideoRequest, Video, VideoServiceClient, VideoServiceController, View, WatchVideoRequest } from 'src/interfaces/video_service';
import { Observable } from 'rxjs';
import { GrpcMethod, GrpcService } from '@nestjs/microservices';

@GrpcService()
export class VideoController implements VideoServiceController {
  constructor(private readonly videoService: VideoService) { }

  @GrpcMethod('VideoService', 'CreateVideo')
  createVideo(request: CreateVideoRequest): Promise<Video> | Observable<Video> | Video {
    return this.videoService.createVideo(request)
  }

  @GrpcMethod('VideoService', 'PublishVideo')
  publishVideo(request: PublishVideoRequest): Promise<Video> | Observable<Video> | Video {
    return this.videoService.publishVideo(request)
  }

  @GrpcMethod('VideoService', 'FindVideoById')
  findVideoById(request: FindVideoByIdRequest): Promise<Video> | Observable<Video> | Video {
    return this.videoService.findVideoById(request)
  }

  @GrpcMethod('VideoService', 'GetAllVideo')
  getAllVideo(request: GetAllVideoRequest): Promise<GetAllVideoResponse> | Observable<GetAllVideoResponse> | GetAllVideoResponse {
    return this.videoService.getAllVideo(request)
  }

  @GrpcMethod('VideoService', 'GetAllChannelVideo')
  getAllChannelVideo(request: GetAllChannelVideoRequest): Promise<GetAllChannelVideoResponse> | Observable<GetAllChannelVideoResponse> | GetAllChannelVideoResponse {
    return this.videoService.getAllChannelVideo(request)
  }
  @GrpcMethod('VideoService', 'CreateComment')
  createComment(request: CreateCommentRequest): Promise<Comment> | Observable<Comment> | Comment {
    return this.videoService.createComment(request)
  }

  @GrpcMethod('VideoService', 'LikeVideo')
  likeVideo(request: LikeVideoRequest): Promise<Like> | Observable<Like> | Like {
    return this.videoService.likeVideo(request)
  }

  @GrpcMethod('VideoService', 'WatchVideo')
  watchVideo(request: WatchVideoRequest): Promise<View> | Observable<View> | View {
    return this.videoService.watchVideo(request)
  }

  @GrpcMethod('VideoService', 'CreatePlaylist')
  createPlaylist(request: CreatePlaylistRequest): Promise<Playlist> | Observable<Playlist> | Playlist {
    return this.videoService.createPlaylist(request)
  }

  @GrpcMethod('VideoService', 'AddVideoToPlaylist')
  addVideoToPlaylist(request: AddVideoToPlaylistRequest): Promise<PlaylistVideo> | Observable<PlaylistVideo> | PlaylistVideo {
    return this.videoService.addVideoToPlaylist(request)
  }

  @GrpcMethod('VideoService', 'FindPlaylistById')
  findPlaylistById(request: FindPlaylistByIdRequest): Promise<Playlist> | Observable<Playlist> | Playlist {
    return this.videoService.findPlaylistById(request)
  }



}
