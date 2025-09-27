import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { ChannelServiceGrpcClient } from 'src/grpc-services/channel-service-client.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { FilesService } from 'src/libs/common/services/files.service';

@Injectable()
export class ChannelService {
    constructor(
        private readonly channelService: ChannelServiceGrpcClient,
        private readonly fileService: FilesService
    ) { }

    public async createChannel(file: Express.Multer.File, userId: string, dto: CreateChannelDto) {
        try {
            const uniquePictureKey: string = `${Math.random()}-${file.originalname}`
            await this.fileService.upload(uniquePictureKey, file.buffer)

            const newChannel = await lastValueFrom(this.channelService.createChannel({ userId: userId, bio: dto.bio, handle: dto.handle, name: dto.name, picture: uniquePictureKey }))
            return newChannel
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }
}
