import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Boolean, Comment, CommentPostRequest, CommentRate, CreatePostRequest, DeletePostCommentReactionRequest, DeletePostCommentRequest, DeletePostReactionRequest, DeletePostRequest, GetAllCommentsRequest, GetAllCommentsResponse, GetAllPostCommentReactionsRequest, GetAllPostCommentReactionsResponse, GetAllPostReactionsRequest, GetAllPostReactionsResponse, GetAllPostsRequest, GetAllPostsResponse, GetPostByIdRequest, GetPostCommentByIdRequest, Post, POST_SERVICE_NAME, PostServiceClient, Rate, RatePostCommentRequest, RatePostRequest } from "src/interfaces/post_service";

@Injectable()
export class PostServiceGrpcClient implements PostServiceClient, OnModuleInit {
    private postServiceClient: PostServiceClient

    constructor(@Inject(POST_SERVICE_NAME) private readonly client: ClientGrpc) { }

    public onModuleInit(): void {
        this.postServiceClient = this.client.getService<PostServiceClient>(POST_SERVICE_NAME)
    }

    createPost(request: CreatePostRequest): Observable<Post> {
        return this.postServiceClient.createPost(request)
    }
    deletePost(request: DeletePostRequest): Observable<Boolean> {
        return this.postServiceClient.deletePost(request)
    }
    getPostById(request: GetPostByIdRequest): Observable<Post> {
        return this.postServiceClient.getPostById(request)
    }
    getAllPosts(request: GetAllPostsRequest): Observable<GetAllPostsResponse> {
        return this.postServiceClient.getAllPosts(request)
    }
    ratePost(request: RatePostRequest): Observable<Rate> {
        return this.postServiceClient.ratePost(request)
    }
    deletePostReaction(request: DeletePostReactionRequest): Observable<Boolean> {
        return this.postServiceClient.deletePostReaction(request)
    }
    getAllPostReactions(request: GetAllPostReactionsRequest): Observable<GetAllPostReactionsResponse> {
        return this.postServiceClient.getAllPostReactions(request)
    }
    commentPost(request: CommentPostRequest): Observable<Comment> {
        return this.postServiceClient.commentPost(request)
    }
    getAllComments(request: GetAllCommentsRequest): Observable<GetAllCommentsResponse> {
        return this.postServiceClient.getAllComments(request)
    }
    getPostCommentById(request: GetPostCommentByIdRequest): Observable<Comment> {
        return this.postServiceClient.getPostCommentById(request)
    }
    deletePostComment(request: DeletePostCommentRequest): Observable<Boolean> {
        return this.postServiceClient.deletePostComment(request)
    }
    ratePostComment(request: RatePostCommentRequest): Observable<CommentRate> {
        return this.postServiceClient.ratePostComment(request)
    }
    deletePostCommentReaction(request: DeletePostCommentReactionRequest): Observable<Boolean> {
        return this.postServiceClient.deletePostCommentReaction(request)
    }
    getAllPostCommentReactions(request: GetAllPostCommentReactionsRequest): Observable<GetAllPostCommentReactionsResponse> {
        return this.postServiceClient.getAllPostCommentReactions(request)
    }

}