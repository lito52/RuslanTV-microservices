import { Controller } from '@nestjs/common';
import { PostService } from './post.service';
import { Boolean, Comment, CommentPostRequest, CommentRate, CreatePostRequest, DeletePostRequest, GetAllPostsRequest, GetAllPostsResponse, GetPostByIdRequest, GetPostByIdResponse, Post, PostServiceController, Rate, RatePostRequest } from 'src/interfaces/post_service';
import { GrpcMethod, GrpcService } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@GrpcService()
export class PostController implements PostServiceController {
  constructor(private readonly postService: PostService) { }


  @GrpcMethod('PostService', 'GetPostById')
  getPostById(request: GetPostByIdRequest): Promise<GetPostByIdResponse> | Observable<GetPostByIdResponse> | GetPostByIdResponse {
    return this.postService.getPostById(request.id)
  }

  @GrpcMethod('PostService', 'CreatePost')
  createPost(request: CreatePostRequest): Promise<Post> | Observable<Post> | Post {
    return this.postService.createPost({ description: request.description, picture: request.picture, title: request.title }, request.channelId)
  }

  @GrpcMethod('PostService', 'DeletePost')
  deletePost(request: DeletePostRequest): Promise<Boolean> | Observable<Boolean> | Boolean {
    return this.postService.deletePost(request.id, request.channelId)
  }

  @GrpcMethod('PostService', 'GetAllPosts')
  getAllPosts(request: GetAllPostsRequest): Promise<GetAllPostsResponse> | Observable<GetAllPostsResponse> | GetAllPostsResponse {
    return this.postService.getAllPosts(request.channelId)
  }

  @GrpcMethod('PostService', 'RatePost')
  ratePost(request: RatePostRequest): Promise<Rate> | Observable<Rate> | Rate {
    return this.postService.ratePost(request.postId, request.parentId, request.rate)
  }

  @GrpcMethod('PostService', 'CommentPost')
  commentPost(request: CommentPostRequest): Promise<Comment> | Observable<Comment> | Comment {
    return this.postService.commentPost(request.postId, request.channelId, request.parentId, request.text)
  }
}
