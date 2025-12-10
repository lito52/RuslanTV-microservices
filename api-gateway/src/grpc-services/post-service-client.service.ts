import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Boolean, Comment, CommentPostRequest, CreatePostRequest, GetAllPostsRequest, GetAllPostsResponse, GetPostByIdRequest, GetPostByIdResponse, Post, POST_SERVICE_NAME, PostServiceClient, Rate, RatePostRequest } from "src/interfaces/post_service";

@Injectable()
export class PostServiceGrpcClient implements PostServiceClient, OnModuleInit {
    private postServiceClient: PostServiceClient

    constructor(@Inject(POST_SERVICE_NAME) private readonly client: ClientGrpc) { }
    public onModuleInit(): void {
        this.postServiceClient = this.client.getService<PostServiceClient>(POST_SERVICE_NAME)
    }
    getPostById(request: GetPostByIdRequest): Observable<GetPostByIdResponse> {
        return this.postServiceClient.getPostById(request)
    }
    createPost(request: CreatePostRequest): Observable<Post> {
        return this.postServiceClient.createPost(request)
    }
    getAllPosts(request: GetAllPostsRequest): Observable<GetAllPostsResponse> {
        return this.postServiceClient.getAllPosts(request)
    }
    ratePost(request: RatePostRequest): Observable<Rate> {
        return this.postServiceClient.ratePost(request)
    }
    commentPost(request: CommentPostRequest): Observable<Comment> {
        return this.postServiceClient.commentPost(request)
    }

}