import { Test, TestingModule } from "@nestjs/testing";
import { AddVideoToPlaylistRequest, Comment, CreateCommentRequest, CreatePlaylistRequest, CreateVideoRequest, FindPlaylistByIdRequest, FindVideoByIdRequest, GetAllChannelVideoRequest, GetAllChannelVideoResponse, GetAllVideoRequest, GetAllVideoResponse, Like, LikeVideoRequest, Playlist, PlaylistVideo, PublishVideoRequest, Video, View, WatchVideoRequest } from "../interfaces/video_service";
import { VideoService } from "./video.service";
import { Channel } from "../interfaces/channel_service";
import { of } from "rxjs";
import { DatabaseService } from "../prisma/database.service";
import { ChannelServiceGrpcClientService } from "../grpc/grpc-services/channel-service-grpc-client.service";
import { RedisCacheService } from "../libs/common/redisCache/redisCache.service";
import { AmqpConnection } from "@golevelup/nestjs-rabbitmq";


const video: Video = {
    id: '43e268d9-ce96-4b77-98bd-cef2390af72e',
    title: "",
    description: "",
    channelId: "",
    status: "",
    previewUrl: "",
    videoUrl: "",
    createdAt: "",
    updatedAt: "",
    comments: [],
    views: [],
    likes: []
}

const videos: Video[] = [
    {
        id: '43e268d9-ce96-4b77-98bd-cef2390af72e',
        title: "",
        description: "",
        channelId: '',
        status: "",
        previewUrl: "",
        videoUrl: "",
        createdAt: "",
        updatedAt: "",
        comments: [],
        views: [],
        likes: []
    },
    {
        id: '43e268d9-ce96-4b77-98bd-cef2390af52e',
        title: "",
        description: "",
        channelId: '52e268d9-ce96-4b77-98bd-cef2390af52e',
        status: "",
        previewUrl: "",
        videoUrl: "",
        createdAt: "",
        updatedAt: "",
        comments: [],
        views: [],
        likes: []
    }
]


const comment: Comment = {
    id: '',
    text: "",
    videoId: '',
    channelId: '',
    createdAt: "",
    updatedAt: ""
}

const view: View = {
    id: '',
    videoId: '',
    channelId: '',
    createdAt: "",
    updatedAt: ""
}

const like: Like = {
    id: '',
    videoId: '',
    channelId: '',
    reactionType: "",
    createdAt: "",
    updatedAt: ""
}

const playlist: Playlist = {
    id: '',
    text: '',
    channelId: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    videos: [

    ]
}

const createVideoRequest: CreateVideoRequest = {
    title: "",
    description: "",
    channelId: "",
    previewUrl: "",
    videoUrl: ""
}

const publishVideoRequest: PublishVideoRequest = {
    videoId: "",
    channelId: ""
}

const findVideoByIdRequest: FindVideoByIdRequest = {
    videoId: ""
}

const getAllVideoRequest: GetAllVideoRequest = {
    page: 0,
    pageSize: 0
}

const getAllVideoResponse: GetAllVideoResponse = {
    videos: videos
}

const getAllChannelVideoRequest: GetAllChannelVideoRequest = {
    channelId: "",
    page: 0,
    pageSize: 0
}

const createCommentRequest: CreateCommentRequest = {
    text: "",
    videoId: "",
    channelId: ""
}

const likeVideoRequest: LikeVideoRequest = {
    videoId: "",
    channelId: "",
    reaction: ""
}

const getAllChannelVideoResponse: GetAllChannelVideoResponse = {
    videos: videos
}

const watchVideoRequest: WatchVideoRequest = {
    videoId: "",
    channelId: ""
}

const createPlaylistRequest: CreatePlaylistRequest = {
    text: "",
    channelId: ""
}

const addVideoToPlaylistRequest: AddVideoToPlaylistRequest = {
    playlistId: "",
    videoId: ""
}

const findPlaylistByIdRequest: FindPlaylistByIdRequest = {
    id: ""
}

const playlistVideo: PlaylistVideo = {
    id: '32e328d2-ce96-4b77-98bd-cef2390af52e',
    playlistId: '32e268d9-ce96-4b33-98bd-cef2390af52e',
    videoId: "",
    createdAt: "",
    updatedAt: "",
    position: 0
}

const db = {
    video: {
        findMany: jest.fn().mockResolvedValue(videos),
        findUnique: jest.fn().mockResolvedValue(video),
        create: jest.fn().mockResolvedValue(video),
        update: jest.fn().mockResolvedValue(video)
    },
    comment: {
        findUnique: jest.fn().mockResolvedValue(comment),
        create: jest.fn().mockResolvedValue(comment),
        update: jest.fn().mockResolvedValue(comment),
    },
    videoView: {
        findUnique: jest.fn().mockResolvedValue(view),
        create: jest.fn().mockResolvedValue(view),
        update: jest.fn().mockResolvedValue(view),
        delete: jest.fn().mockResolvedValue(Boolean)
    },
    like: {
        findUnique: jest.fn().mockResolvedValue(like),
        create: jest.fn().mockResolvedValue(like),
        update: jest.fn().mockResolvedValue(like),
        delete: jest.fn().mockResolvedValue(Boolean)
    },
    playlist: {
        findUnique: jest.fn().mockResolvedValue(playlist),
        create: jest.fn().mockResolvedValue(playlist),
        update: jest.fn().mockResolvedValue(playlist),
    },
    playlistVideo: {
        findUnique: jest.fn().mockResolvedValue(playlistVideo),
        aggregate: jest.fn().mockResolvedValue({ _max: { position: 0 } }),
        create: jest.fn().mockResolvedValue(playlistVideo),
        update: jest.fn().mockResolvedValue(playlistVideo),
    }
}

const channel: Channel = {
    id: "",
    userId: "",
    name: "",
    handle: "",
    bio: "",
    profilePicture: "",
    backgroundPicture: "",
    subscriptions: []
}

const channelService = {
    findChannelById: jest.fn().mockReturnValue(of(channel)),
}

const cacheService = {
    get: jest.fn(),
    set: jest.fn(),
    del: jest.fn(),
    addListFirstVideos: jest.fn(),
    addListFirstChannelVideos: jest.fn()
}

const rmqService = {
    publish: jest.fn()
}

describe('Video Service', () => {
    let service: VideoService
    let prismaService: DatabaseService
    let channelServiceGrpcClientService: ChannelServiceGrpcClientService
    let redisCacheService: RedisCacheService
    let rabbitMqService: AmqpConnection

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                VideoService,
                {
                    provide: DatabaseService,
                    useValue: db,
                },
                {
                    provide: ChannelServiceGrpcClientService,
                    useValue: channelService,
                },
                {
                    provide: RedisCacheService,
                    useValue: cacheService,
                },
                {
                    provide: AmqpConnection,
                    useValue: rmqService,
                }
            ]
        }).compile()
        service = module.get<VideoService>(VideoService)
        prismaService = module.get<DatabaseService>(DatabaseService)
        channelServiceGrpcClientService = module.get<ChannelServiceGrpcClientService>(ChannelServiceGrpcClientService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined();
    })

    it('should return video', async () => {
        const result = await service.createVideo(createVideoRequest)
        expect(result).toEqual(video)
    })

    it('should return video', async () => {
        const result = await service.publishVideo(publishVideoRequest)
        expect(result).toEqual(video)
    })

    it('should return video', async () => {
        const result = await service.findVideoById(findVideoByIdRequest)
        expect(result).toEqual(video)
    })

    it('should return video', async () => {
        const result = await service.getAllVideo(getAllVideoRequest)
        expect(result).toEqual(getAllVideoResponse)
    })

    it('should return videos', async () => {
        const result = await service.getAllChannelVideo(getAllChannelVideoRequest)
        expect(result).toEqual(getAllChannelVideoResponse)
    })

    it('should return comment', async () => {
        const result = await service.createComment(createCommentRequest)
        expect(result).toEqual(comment)
    })

    it('should return like', async () => {
        const result = await service.likeVideo(likeVideoRequest)
        expect(result).toEqual(like)
    })

    it('should return view', async () => {
        const result = await service.watchVideo(watchVideoRequest)
        expect(result).toEqual(view)
    })


    it('should return playlist', async () => {
        const result = await service.createPlaylist(createPlaylistRequest)
        expect(result).toEqual(playlist)
    })


    it('should return playlist', async () => {
        const result = await service.addVideoToPlaylist(addVideoToPlaylistRequest)
        expect(result).toEqual(playlistVideo)
    })

    it('should return playlist', async () => {
        const result = await service.findPlaylistById(findPlaylistByIdRequest)
        expect(result).toEqual(playlist)
    })
})


