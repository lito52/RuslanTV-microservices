import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Rates } from './types/post-types';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Post('createPost')
  public async createPost(@Body() dto: CreatePostDto) {
    return await this.postService.createPost(dto)
  }

  @Post('addPostMedia')
  @UseInterceptors(FileInterceptor('file'))
  public async addPostMedia(@UploadedFile() file: Express.Multer.File, @Body('postId') postId: string) {
    return await this.postService.addPostMedia(file, postId)
  }

  @Get('getPostById/:id')
  public async getPostById(@Param('id') postId: string) {
    return await this.postService.getPostById(postId)
  }

  @Get('getAllPosts/:id')
  public async getAllPosts(@Param('id') channelId: string, @Body('take') take: number, @Body('skip') skip: number) {
    return await this.postService.getAllPosts(channelId, take, skip)
  }

  @Post('ratePost')
  public async ratePost(@Body('postId') postId: string, @Body('parentId') parentId: string, @Body('rate') rate: Rates) {
    return await this.postService.ratePost(postId, parentId, rate)
  }

  @Post('commentPost')
  public async commentPost(@Body('postId') postId: string, @Body('parentId') parentId: string, @Body('text') text: string) {
    return await this.postService.commentPost(postId, parentId, text)
  }
}
