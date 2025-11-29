import { Body, Controller, Patch, Post, Put, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { Authorized } from 'src/auth/decorators/authorized.decorator';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UpdateChannelDto } from './dto/update-channel.dto';

@Controller('channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) { }

  @Post('createChannel')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'profilePicture', maxCount: 1 }, { name: 'backgroundPicture', maxCount: 1 }]))
  public async createChannel(@UploadedFiles() files: { profilePicture?: Express.Multer.File[], backgroundPicture?: Express.Multer.File[] }, @Authorized('id') userId: string, @Body() dto: CreateChannelDto) {
    return await this.channelService.createChannel(files, userId, dto)
  }

  @Patch('updateChannel')
  public async updateChannel(@Authorized('id') userId: string, @Body() dto: UpdateChannelDto) {
    return await this.channelService.updateChannel(userId, dto)
  }

  @Patch('updateChannelPictures')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'profilePicture', maxCount: 1 }, { name: 'backgroundPicture', maxCount: 1 }]))
  public async updateChannelPictures(@UploadedFiles() files: { profilePicture?: Express.Multer.File[], backgroundPicture?: Express.Multer.File[] }, @Authorized('id') userId: string) {
    return await this.channelService.updateChannelPictures(files, userId)
  }
}
