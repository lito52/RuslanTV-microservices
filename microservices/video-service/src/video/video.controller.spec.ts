import { Test, TestingModule } from "@nestjs/testing";
import { AddVideoToPlaylistRequest, Comment, CreateCommentRequest, CreatePlaylistRequest, CreateVideoRequest, FindPlaylistByIdRequest, FindVideoByIdRequest, GetAllChannelVideoRequest, GetAllVideoRequest, Like, LikeVideoRequest, Playlist, PublishVideoRequest, Video, View, WatchVideoRequest } from "../interfaces/video_service";
import { v4 as uuidv4 } from 'uuid'
import { VideoController } from "./video.controller";
import { VideoService } from "./video.service";

jest.mock('uuid', () => ({
    v4: jest.fn(() => 'test-uuid-1234'),
    v1: jest.fn(() => 'test-uuid-v1-1234'),
    validate: jest.fn(),
    version: jest.fn()
}));

const video: Video = {
    id: uuidv4(),
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
        id: uuidv4(),
        title: "",
        description: "",
        channelId: uuidv4(),
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
        id: uuidv4(),
        title: "",
        description: "",
        channelId: uuidv4(),
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
    id: uuidv4(),
    text: "",
    videoId: uuidv4(),
    channelId: uuidv4(),
    createdAt: "",
    updatedAt: ""
}

const view: View = {
    id: uuidv4(),
    videoId: uuidv4(),
    channelId: uuidv4(),
    createdAt: "",
    updatedAt: ""
}

const like: Like = {
    id: uuidv4(),
    videoId: uuidv4(),
    channelId: uuidv4(),
    reactionType: "",
    createdAt: "",
    updatedAt: ""
}

const playlist: Playlist = {
    id: uuidv4(),
    text: "",
    channelId: uuidv4(),
    createdAt: "",
    updatedAt: "",
    videos: []
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


describe('VideoController', () => {
    let controller: VideoController;
    let service: VideoService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [VideoController],
            providers: [
                {
                    provide: VideoService,
                    useValue: {
                        createVideo: jest.fn().mockResolvedValue(video),
                        publishVideo: jest.fn().mockResolvedValue(video),
                        findVideoById: jest.fn().mockResolvedValue(video),
                        getAllVideo: jest.fn().mockResolvedValue(videos),
                        getAllChannelVideo: jest.fn().mockResolvedValue(videos),
                        createComment: jest.fn().mockResolvedValue(comment),
                        likeVideo: jest.fn().mockResolvedValue(like),
                        watchVideo: jest.fn().mockResolvedValue(view),
                        createPlaylist: jest.fn().mockResolvedValue(playlist),
                        addVideoToPlaylist: jest.fn().mockResolvedValue(playlist),
                        findPlaylistById: jest.fn().mockResolvedValue(playlist),
                    },
                },
            ]
        }).compile()

        controller = module.get<VideoController>(VideoController)
        service = module.get<VideoService>(VideoService)
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    })

    it('should return video', async () => {
        const result = await controller.createVideo(createVideoRequest)
        expect(result).toEqual(video)
    })

    it('should return video', async () => {
        const result = await controller.publishVideo(publishVideoRequest)
        expect(result).toEqual(video)
    })

    it('should return video', async () => {
        const result = await controller.findVideoById(findVideoByIdRequest)
        expect(result).toEqual(video)
    })

    it('should return video', async () => {
        const result = await controller.getAllVideo(getAllVideoRequest)
        expect(result).toEqual(videos)
    })

    it('should return video', async () => {
        const result = await controller.getAllChannelVideo(getAllChannelVideoRequest)
        expect(result).toEqual(videos)
    })

    it('should return comment', async () => {
        const result = await controller.createComment(createCommentRequest)
        expect(result).toEqual(comment)
    })

    it('should return like', async () => {
        const result = await controller.likeVideo(likeVideoRequest)
        expect(result).toEqual(like)
    })

    it('should return view', async () => {
        const result = await controller.watchVideo(watchVideoRequest)
        expect(result).toEqual(view)
    })


    it('should return playlist', async () => {
        const result = await controller.createPlaylist(createPlaylistRequest)
        expect(result).toEqual(playlist)
    })


    it('should return playlist', async () => {
        const result = await controller.addVideoToPlaylist(addVideoToPlaylistRequest)
        expect(result).toEqual(playlist)
    })

    it('should return playlist', async () => {
        const result = await controller.findPlaylistById(findPlaylistByIdRequest)
        expect(result).toEqual(playlist)
    })

})