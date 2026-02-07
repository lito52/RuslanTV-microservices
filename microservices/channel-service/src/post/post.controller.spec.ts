import { Test, TestingModule } from "@nestjs/testing";
import { v4 as uuidv4 } from 'uuid'
import { PostController } from "./post.controller";
import { PostService } from "./post.service";
import { AddPostMediaRequest, Comment, CommentPostRequest, CreatePostRequest, GetAllPostsRequest, GetPostByIdRequest, Like, LikePostRequest, Media, Post } from "../interfaces/post_service";

jest.mock('uuid', () => ({
    v4: jest.fn(() => 'test-uuid-1234'),
    v1: jest.fn(() => 'test-uuid-v1-1234'),
    validate: jest.fn(),
    version: jest.fn()
}));

const post: Post = {
    id: uuidv4(),
    text: "",
    channelId: "",
    createdAt: "",
    updatedAt: "",
    postMedias: [],
    postComments: [],
    postLikes: []
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

const posts: Post[] = [
    { id: uuidv4(), text: "", channelId: "", createdAt: "", updatedAt: "", postMedias: [], postComments: [], postLikes: [] },
    { id: uuidv4(), text: "", channelId: "", createdAt: "", updatedAt: "", postMedias: [], postComments: [], postLikes: [] },
    { id: uuidv4(), text: "", channelId: "", createdAt: "", updatedAt: "", postMedias: [], postComments: [], postLikes: [] },
]

const like: Like = {
    id: uuidv4(),
    postId: uuidv4(),
    parentId: uuidv4(),
    reaction: "",
    createdAt: "",
    updatedAt: ""
}

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

describe('PostController', () => {
    let controller: PostController;
    let service: PostService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PostController],
            providers: [
                {
                    provide: PostService,
                    useValue: {
                        createPost: jest.fn().mockResolvedValue(post),
                        addPostMedia: jest.fn().mockResolvedValue(media),
                        getPostById: jest.fn().mockResolvedValue(post),
                        getAllPosts: jest.fn().mockResolvedValue(posts),
                        ratePost: jest.fn().mockResolvedValue(like),
                        commentPost: jest.fn().mockResolvedValue(comment),
                    },
                },
            ]
        }).compile()

        controller = module.get<PostController>(PostController)
        service = module.get<PostService>(PostService)
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    })

    it('should return post', async () => {
        const result = await controller.createPost(createPostRequest)
        expect(result).toEqual(post)
    })

    it('should return media', async () => {
        const result = await controller.addPostMedia(addPostMediaDto)
        expect(result).toEqual(media)
    })

    it('should return post', async () => {
        const result = await controller.getPostById(getPostByIdRequest)
        expect(result).toEqual(post)
    })

    it('should return post', async () => {
        const result = await controller.getAllPosts(getAllPostsRequest)
        expect(result).toEqual(posts)
    })

    it('should return like', async () => {
        const result = await controller.ratePost(ratePostRequest)
        expect(result).toEqual(like)
    })

    it('should return comment', async () => {
        const result = await controller.commentPost(commentPostRequest)
        expect(result).toEqual(comment)
    })
})