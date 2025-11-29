import { Injectable } from '@nestjs/common';
import { last, lastValueFrom } from 'rxjs';
import { ChannelServiceGrpcClient } from 'src/grpc-services/channel-service-client.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { FilesService } from 'src/libs/common/services/files.service';
import { UpdateChannelRequest } from 'src/interfaces/channel_service';
import { UpdateChannelDto } from './dto/update-channel.dto';

@Injectable()
export class ChannelService {
    constructor(
        private readonly channelService: ChannelServiceGrpcClient,
        private readonly fileService: FilesService
    ) { }

    // private async uploadMedia(files: { profilePicture?: Express.Multer.File[], backgroundPicture?: Express.Multer.File[] }) {
    //     // const generateUniqueKey = (originalName: string): string => {
    //     //     return `${Date.now()}-${Math.random().toString(36).substring(2)}-${originalName}`;
    //     // };

    //     const uploadFileIfExists = async (fileArray: Express.Multer.File[] | undefined): Promise<string> => {
    //         if (!fileArray || fileArray.length === 0) {
    //             return '';
    //         }

    //         const file = fileArray[0];
    //         const uniqueKey = generateUniqueKey(file.originalname);
    //         await this.fileService.upload(uniqueKey, file.buffer);
    //         return uniqueKey;
    //     };

    //     // const profilePictureKey = await uploadFileIfExists(files.profilePicture);
    //     // const backgroundPictureKey = await uploadFileIfExists(files.backgroundPicture);
    // }

    private generateUniqueKey(originalName: string): string {
        return `${Date.now()}-${Math.random().toString(36).substring(2)}-${originalName}`;
    };

    private async uploadFileIfExists(fileArray: Express.Multer.File[] | undefined): Promise<string> {
        if (!fileArray || fileArray.length === 0) {
            return '';
        }

        const file = fileArray[0];
        const uniqueKey = this.generateUniqueKey(file.originalname);
        await this.fileService.upload(uniqueKey, file.buffer);
        return uniqueKey;
    };

    public async createChannel(files: { profilePicture?: Express.Multer.File[], backgroundPicture?: Express.Multer.File[] }, userId: string, dto: CreateChannelDto) {
        try {
            const profilePictureKey = await this.uploadFileIfExists(files.profilePicture);
            const backgroundPictureKey = await this.uploadFileIfExists(files.backgroundPicture);

            const newChannel = await lastValueFrom(this.channelService.createChannel({ userId: userId, bio: dto.bio, handle: dto.handle, name: dto.name, profilePicture: profilePictureKey, backgroundPicture: backgroundPictureKey }))
            return newChannel
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async updateChannel(userId: string, dto: UpdateChannelDto) {
        try {
            const updatedChannel = await lastValueFrom(this.channelService.updateChannel({ userId: userId, bio: dto.bio, handle: dto.handle, name: dto.name }))
            return updatedChannel
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }


    public async updateChannelPictures(files: { profilePicture?: Express.Multer.File[], backgroundPicture?: Express.Multer.File[] }, userId: string) {
        try {
            const profilePictureKey = await this.uploadFileIfExists(files.profilePicture);
            const backgroundPictureKey = await this.uploadFileIfExists(files.backgroundPicture);

            const updatedChannelPictures = await lastValueFrom(this.channelService.updateChannelPictures({ userId: userId, profilePicture: profilePictureKey, backgroundPicture: backgroundPictureKey }))
            return updatedChannelPictures
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async findChannelByUserId(userId: string) {
        try {
            const channel = await lastValueFrom(this.channelService.findChannelByUserId({ userId: userId }))
            return channel
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async findChannel(userId: string) {
        try {
            const channel = await lastValueFrom(this.channelService.findChannelByUserId({ userId: userId }))
            return channel
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async subscribe(userId: string, id: string) {
        try {
            const channel = await lastValueFrom(this.channelService.findChannelByUserId({ userId: id }))
            const channelId = channel.id

            const subscription = await lastValueFrom(this.channelService.subscribe({ userId: userId, channelId: channelId }))
            return subscription
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async unsubscribe(userId: string, id: string) {
        try {
            const channel = await lastValueFrom(this.channelService.findChannelByUserId({ userId: id }))
            const channelId = channel.id

            const unsubscription = await lastValueFrom(this.channelService.unSubscribe({ userId: userId, channelId: channelId }))
            return unsubscription
        } catch (error) {
            return {
                message: [error.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

}
