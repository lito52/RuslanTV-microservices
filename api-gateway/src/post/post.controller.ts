import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Post('createPost')
  public async createPost(dto: CreatePostDto) {
    await this.postService.createPost(dto)
  }

  @Post('addPostMedia')
  @UseInterceptors(FileInterceptor('file'))
  public async addPostMedia(@UploadedFile() file: Express.Multer.File, @Body('postId') postId: string) {
    await this.postService.addPostMedia(file, postId)
  }

  @Get('getPostById/:id')
  public async getPostById(@Param('postId') postId: string) {
    await this.postService.getPostById(postId)
  }

  @Get('getAllPosts/:id')
  public async getAllPosts(@Param('channelId') channelId: string) {
    await this.postService.getAllPosts(channelId)
  }
}
