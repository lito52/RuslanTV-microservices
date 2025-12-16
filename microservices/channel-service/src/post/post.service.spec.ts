import { Test, TestingModule } from "@nestjs/testing";
import { v4 as uuidv4 } from 'uuid'
import { AddPostMediaRequest, Comment, CommentPostRequest, CreatePostRequest, GetAllPostsRequest, GetAllPostsResponse, GetPostByIdRequest, Like, LikePostRequest, Media, Post } from "src/interfaces/post_service";
import { DatabaseService } from "../prisma/database.service";
import { PostService } from "./post.service";
import { AuthServiceGrpcClientService } from "../grpc/grpc-services/auth-service-grpc-client.service";
import { User } from "../interfaces/auth_service";
import { of } from "rxjs";
import { ChannelService } from "../channel/channel.service";
import { Channel } from "../interfaces/channel_service";

jest.mock('uuid', () => ({
    v4: jest.fn(() => 'test-uuid-1234'),
    v1: jest.fn(() => 'test-uuid-v1-1234'),
    validate: jest.fn(),
    version: jest.fn()
}));

const mockChannel: Channel = {
    id: "1511e131-67c5-4789-9ee6-382f04a76f48",
    userId: '30ff8286-9b0a-45a0-af60-9e8f1e06c069',
    name: 'sit',
    handle: 'Ut et deserunt ullamco',
    bio: 'ullamco in',
    profilePicture: 'cillum enim nulla voluptate do',
    backgroundPicture: 'culpa dolore',
    subscriptions: [],
}

const post: Post = {
    id: uuidv4(),
    text: "wwww",
    channelId: uuidv4(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    postMedias: [],
    postComments: [],
    postLikes: []
}

const mockPosts: Post[] = [
    post,
    {
        ...post,
        id: uuidv4()
    }
]

const mockPostsResponse: GetAllPostsResponse = {
    posts: mockPosts
}

const addPostMediaDto: AddPostMediaRequest = {
    url: "",
    postId: uuidv4()
}

const media: Media = {
    id: "",
    url: "",
    postId: uuidv4(),
    createdAt: "",
    updatedAt: ""
}

const medias: Media[] = [
    {
        id: "aw",
        url: "ww",
        postId: uuidv4(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
]


const like: Like = {
    id: uuidv4(),
    postId: uuidv4(),
    parentId: uuidv4(),
    reaction: "",
    createdAt: "",
    updatedAt: ""
}

const likes: Like[] = [
    {
        id: uuidv4(),
        postId: uuidv4(),
        parentId: uuidv4(),
        reaction: "",
        createdAt: "",
        updatedAt: ""
    },
    {
        id: uuidv4(),
        postId: uuidv4(),
        parentId: uuidv4(),
        reaction: "",
        createdAt: "",
        updatedAt: ""
    },
    {
        id: uuidv4(),
        postId: uuidv4(),
        parentId: uuidv4(),
        reaction: "",
        createdAt: "",
        updatedAt: ""
    }
]

const comment: Comment = {
    id: uuidv4(),
    postId: uuidv4(),
    parentId: uuidv4(),
    text: "",
    createdAt: "",
    updatedAt: ""
}

const createPostRequest: CreatePostRequest = {
    text: "",
    channelId: uuidv4()
}

const addPostMediaRequest: AddPostMediaRequest = {
    url: "",
    postId: uuidv4()
}

const getPostByIdRequest: GetPostByIdRequest = {
    id: uuidv4()
}

const getAllPostsRequest: GetAllPostsRequest = {
    channelId: uuidv4(),
    take: 10,
    skip: 0
}

const ratePostRequest: LikePostRequest = {
    postId: uuidv4(),
    parentId: uuidv4(),
    rate: ""
}

const commentPostRequest: CommentPostRequest = {
    postId: uuidv4(),
    parentId: uuidv4(),
    text: ""
}

const user: User = {
    id: uuidv4(),
    username: "",
    picture: "",
    email: "",
    password: "",
    role: "",
    isVerified: false,
    isTwoFactorEnabled: false,
    method: ""
}

const comments: Comment[] = [
    {
        id: uuidv4(),
        postId: uuidv4(),
        parentId: uuidv4(),
        text: "",
        createdAt: "",
        updatedAt: ""
    },
    {
        id: uuidv4(),
        postId: uuidv4(),
        parentId: uuidv4(),
        text: "",
        createdAt: "",
        updatedAt: ""
    },
    {
        id: uuidv4(),
        postId: uuidv4(),
        parentId: uuidv4(),
        text: "",
        createdAt: "",
        updatedAt: ""
    }
]

const db = {
    post: {
        findMany: jest.fn().mockResolvedValue(mockPosts),
        findUnique: jest.fn().mockResolvedValue(post),
        create: jest.fn().mockResolvedValue(post),
        update: jest.fn().mockResolvedValue(post)
    },
    postMedia: {
        findMany: jest.fn().mockResolvedValue(medias),
        findUnique: jest.fn().mockResolvedValue(media),
        create: jest.fn().mockResolvedValue(media),
        update: jest.fn().mockResolvedValue(media)
    },
    postComments: {
        findMany: jest.fn().mockResolvedValue(comments),
        findUnique: jest.fn().mockResolvedValue(comment),
        create: jest.fn().mockResolvedValue(comment),
        update: jest.fn().mockResolvedValue(comment)
    },
    postLikes: {
        findMany: jest.fn().mockResolvedValue(likes),
        findUnique: jest.fn().mockResolvedValue(like),
        create: jest.fn().mockResolvedValue(like),
        update: jest.fn().mockResolvedValue(like)
    }
}

const authService = {
    findUserById: jest.fn().mockReturnValue(of(user)),
}

describe('Post Service', () => {
    let service: PostService
    let prisma: DatabaseService
    let authServiceGrpcClientService: AuthServiceGrpcClientService
    let channelService: ChannelService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PostService,
                {
                    provide: DatabaseService,
                    useValue: db,
                },
                {
                    provide: AuthServiceGrpcClientService,
                    useValue: authService,
                },
                {
                    provide: ChannelService,
                    useValue: {
                        findChannelByChannelId: jest.fn().mockResolvedValue(mockChannel)
                    }
                }
            ]
        }).compile()
        service = module.get<PostService>(PostService)
        prisma = module.get<DatabaseService>(DatabaseService)
        authServiceGrpcClientService = module.get<AuthServiceGrpcClientService>(AuthServiceGrpcClientService)
        channelService = module.get<ChannelService>(ChannelService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined();
    })

    it('should return post', async () => {
        const result = await service.createPost(createPostRequest)
        expect(result).toEqual(post)
    })

    it('should return media', async () => {
        const result = await service.addPostMedia(addPostMediaDto.url, addPostMediaDto.postId)
        expect(result).toEqual(media)
    })

    it('should return post', async () => {
        const result = await service.getPostById(getPostByIdRequest.id)
        expect(result).toEqual(post)
    })

    it('should return posts', async () => {
        const result = await service.getAllPosts(getAllPostsRequest.channelId)
        expect(result).toEqual(mockPostsResponse)
    })

    it('should return like', async () => {
        const result = await service.ratePost(ratePostRequest.postId, ratePostRequest.parentId, ratePostRequest.rate)
        expect(result).toEqual(like)
    })

    it('should return comment', async () => {
        const result = await service.commentPost(commentPostRequest.postId, commentPostRequest.parentId, commentPostRequest.text)
        expect(result).toEqual(comment)
    })
})


