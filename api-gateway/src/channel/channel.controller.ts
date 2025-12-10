import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { Authorized } from 'src/auth/decorators/authorized.decorator';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Authorization } from 'src/auth/decorators/auth.decorator';
import { UserRole } from 'src/auth/types/types';

@Controller('channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) { }

  @Post('createChannel')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'profilePicture', maxCount: 1 }, { name: 'backgroundPicture', maxCount: 1 }]))
  public async createChannel(@UploadedFiles() files: { profilePicture?: Express.Multer.File[], backgroundPicture?: Express.Multer.File[] }, @Authorized('id') userId: string, @Body() dto: CreateChannelDto) {
    return await this.channelService.createChannel(files, userId, dto)
  }

  @Delete('deleteChannel')
  public async deleteChannel(@Authorized('id') userId: string) {
    return await this.channelService.deleteChannel(userId)
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

  @Get('findChannelByUserId/:id')
  @Authorization(UserRole.ADMIN)
  public async findChannelByUserId(@Param('userId') userId: string) {
    return await this.channelService.findChannelByUserId(userId)
  }

  @Get('findChannel')
  @Authorization()
  public async findChannel(@Authorized('id') userId: string) {
    return await this.channelService.findChannel(userId)
  }

  @Post('subscribe/:id')
  @Authorization()
  public async subscribe(@Authorized('id') userId: string, @Param('id') id: string) {
    return await this.channelService.subscribe(userId, id)
  }

  @Delete('unsubscribe/:id')
  @Authorization()
  public async unsubscribe(@Authorized('id') userId: string, @Param('id') id: string) {
    return await this.channelService.unsubscribe(userId, id)
  }

  @Post('subscribeWithNotif/:id')
  @Authorization()
  public async subscribeWithNotif(@Authorized('id') userId: string, @Param('id') id: string) {
    return await this.channelService.subscribeWithNotif(userId, id)
  }

}
