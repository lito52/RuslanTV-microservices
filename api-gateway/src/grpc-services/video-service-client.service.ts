import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { AddVideoToPlaylistRequest, Comment, CreateCommentRequest, CreatePlaylistRequest, CreateVideoRequest, FindPlaylistByIdRequest, FindVideoByIdRequest, GetAllChannelVideoRequest, GetAllChannelVideoResponse, GetAllVideoRequest, GetAllVideoResponse, Like, LikeVideoRequest, Playlist, PlaylistVideo, UpdateVideoStatusRequest, Video, VIDEO_SERVICE_NAME, VideoServiceClient, View, WatchVideoRequest } from "src/interfaces/video_service";

@Injectable()
export class VideoServiceGrpcClient implements VideoServiceClient, OnModuleInit {
    private videoServiceClient: VideoServiceClient

    constructor(@Inject(VIDEO_SERVICE_NAME) private readonly client: ClientGrpc) { }
    public onModuleInit(): void {
        this.videoServiceClient = this.client.getService<VideoServiceClient>(VIDEO_SERVICE_NAME)
    }

    createVideo(request: CreateVideoRequest): Observable<Video> {
        return this.videoServiceClient.createVideo(request)
    }
    updateVideoStatus(request: UpdateVideoStatusRequest): Observable<Video> {
        return this.videoServiceClient.updateVideoStatus(request)
    }
    findVideoById(request: FindVideoByIdRequest): Observable<Video> {
        return this.videoServiceClient.findVideoById(request)
    }
    getAllVideo(request: GetAllVideoRequest): Observable<GetAllVideoResponse> {
        return this.videoServiceClient.getAllVideo(request)
    }
    getAllChannelVideo(request: GetAllChannelVideoRequest): Observable<GetAllChannelVideoResponse> {
        return this.videoServiceClient.getAllChannelVideo(request)
    }
    createComment(request: CreateCommentRequest): Observable<Comment> {
        return this.videoServiceClient.createComment(request)
    }
    likeVideo(request: LikeVideoRequest): Observable<Like> {
        return this.videoServiceClient.likeVideo(request)
    }
    watchVideo(request: WatchVideoRequest): Observable<View> {
        return this.videoServiceClient.watchVideo(request)
    }
    createPlaylist(request: CreatePlaylistRequest): Observable<Playlist> {
        return this.videoServiceClient.createPlaylist(request)
    }
    addVideoToPlaylist(request: AddVideoToPlaylistRequest): Observable<PlaylistVideo> {
        return this.videoServiceClient.addVideoToPlaylist(request)
    }
    findPlaylistById(request: FindPlaylistByIdRequest): Observable<Playlist> {
        return this.videoServiceClient.findPlaylistById(request)
    }


}