import { Controller } from '@nestjs/common';
import { PostService } from './post.service';
import { Boolean, Comment, CommentPostRequest, CommentRate, CreatePostRequest, DeletePostCommentReactionRequest, DeletePostCommentRequest, DeletePostReactionRequest, DeletePostRequest, GetAllCommentsRequest, GetAllCommentsResponse, GetAllPostCommentReactionsRequest, GetAllPostCommentReactionsResponse, GetAllPostReactionsRequest, GetAllPostReactionsResponse, GetAllPostsRequest, GetAllPostsResponse, GetPostByIdRequest, GetPostCommentByIdRequest, Post, PostServiceController, Rate, RatePostCommentRequest, RatePostRequest } from 'src/interfaces/post_service';
import { GrpcMethod, GrpcService } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@GrpcService()
export class PostController implements PostServiceController {
  constructor(private readonly postService: PostService) { }

  @GrpcMethod('PostService', 'CreatePost')
  createPost(request: CreatePostRequest): Promise<Post> | Observable<Post> | Post {
    return this.postService.createPost({ description: request.description, picture: request.picture, title: request.title }, request.channelId)
  }

  @GrpcMethod('PostService', 'DeletePost')
  deletePost(request: DeletePostRequest): Promise<Boolean> | Observable<Boolean> | Boolean {
    return this.postService.deletePost(request.id, request.channelId)
  }

  @GrpcMethod('PostService', 'GetPostById')
  getPostById(request: GetPostByIdRequest): Promise<Post> | Observable<Post> | Post {
    return this.postService.getPostById(request.id)
  }

  @GrpcMethod('PostService', 'GetAllPosts')
  getAllPosts(request: GetAllPostsRequest): Promise<GetAllPostsResponse> | Observable<GetAllPostsResponse> | GetAllPostsResponse {
    return this.postService.getAllPosts(request.channelId)
  }

  @GrpcMethod('PostService', 'RatePost')
  ratePost(request: RatePostRequest): Promise<Rate> | Observable<Rate> | Rate {
    return this.postService.ratePost(request.postId, request.parentId, request.rate)
  }

  @GrpcMethod('PostService', 'DeletePostReaction')
  deletePostReaction(request: DeletePostReactionRequest): Promise<Boolean> | Observable<Boolean> | Boolean {
    return this.postService.deletePostReaction(request.postId, request.channelId)
  }

  @GrpcMethod('PostService', 'GetAllPostReactions')
  getAllPostReactions(request: GetAllPostReactionsRequest): Promise<GetAllPostReactionsResponse> | Observable<GetAllPostReactionsResponse> | GetAllPostReactionsResponse {
    return this.postService.getAllPostReactions(request.postId)
  }

  @GrpcMethod('PostService', 'CommentPost')
  commentPost(request: CommentPostRequest): Promise<Comment> | Observable<Comment> | Comment {
    return this.postService.commentPost(request.postId, request.channelId, request.parentId, request.text)
  }

  @GrpcMethod('PostService', 'GetAllComments')
  getAllComments(request: GetAllCommentsRequest): Promise<GetAllCommentsResponse> | Observable<GetAllCommentsResponse> | GetAllCommentsResponse {
    return this.postService.getAllPostComments(request.postId)
  }

  @GrpcMethod('PostService', 'GetPostCommentById')
  getPostCommentById(request: GetPostCommentByIdRequest): Promise<Comment> | Observable<Comment> | Comment {
    return this.postService.getPostCommentById(request.id)
  }

  @GrpcMethod('PostService', 'DeletePostComment')
  deletePostComment(request: DeletePostCommentRequest): Promise<Boolean> | Observable<Boolean> | Boolean {
    return this.postService.deletePostComment(request.channelId, request.commentId)
  }

  @GrpcMethod('PostService', 'RatePostComment')
  ratePostComment(request: RatePostCommentRequest): Promise<CommentRate> | Observable<CommentRate> | CommentRate {
    return this.postService.ratePostComment(request.commentId, request.parentId, request.rate)
  }

  @GrpcMethod('PostService', 'DeletePostCommentReaction')
  deletePostCommentReaction(request: DeletePostCommentReactionRequest): Promise<Boolean> | Observable<Boolean> | Boolean {
    return this.postService.deletePostCommentReaction(request.commentId, request.channelId)
  }

  @GrpcMethod('PostService', 'GetAllPostCommentReactions')
  getAllPostCommentReactions(request: GetAllPostCommentReactionsRequest): Promise<GetAllPostCommentReactionsResponse> | Observable<GetAllPostCommentReactionsResponse> | GetAllPostCommentReactionsResponse {
    return this.postService.getAllPostCommentReactions(request.commentId)
  }
}
