import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { Authorized } from 'src/auth/decorators/authorized.decorator';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) { }

  @Post('createChannel')
  @UseInterceptors(FileInterceptor('file'))
  public async createChannel(@UploadedFile() file: Express.Multer.File, @Authorized('id') userId: string, @Body() dto: CreateChannelDto) {
    return await this.channelService.createChannel(file, userId, dto)
  }
}
