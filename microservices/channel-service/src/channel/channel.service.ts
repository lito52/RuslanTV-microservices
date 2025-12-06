import { Injectable } from '@nestjs/common';
import { CreateChannelDto } from './dto/create-channel.dto';
import { lastValueFrom } from 'rxjs';
import { RpcException } from '@nestjs/microservices';
import { AuthServiceGrpcClientService } from 'src/grpc/grpc-services/auth-service-grpc-client.service';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { SubscribeType } from '@prisma/client';
import { DatabaseService } from 'src/prisma/database.service';

@Injectable()
export class ChannelService {
    public constructor(
        private readonly prismaService: DatabaseService,
        private readonly authService: AuthServiceGrpcClientService

    ) { }

    public async createChannel(dto: CreateChannelDto) {
        const existingUser = await lastValueFrom(this.authService.findUserById({ id: dto.userId }))
        const existingChannel = await this.findChannelByUserId(dto.userId)
        if (existingChannel) {
            throw new RpcException('Chanel already exists')
        }

        const newChannel = await this.prismaService.channel.create({
            data: {
                userId: existingUser.id,
                name: dto.name,
                handle: dto.handle,
                bio: dto.bio,
                profilePicture: dto.profilePicture,
                backgroundPicture: dto.backgroundPicture
            }
        })

        return newChannel
    }

    public async deleteChannel(userId: string) {
        const existingChannel = await this.findChannelByUserId(userId)

        return await this.prismaService.channel.delete({
            where: {
                userId
            }
        })
    }

    public async updateChannel(userId: string, dto: UpdateChannelDto) {
        const existingChannel = await this.findChannelByUserId(userId)

        if (!existingChannel) {
            throw new RpcException('Chanel not exist')
        }

        const updatedChannel = await this.prismaService.channel.update({
            where: {
                userId: existingChannel.userId
            },
            data: {
                name: dto.name,
                bio: dto.bio,
                handle: dto.handle
            }
        })

        return updatedChannel
    }

    public async updateChannelPicture(userId: string, profilePicture: string, backgroundPicture: string) {
        const existingChannel = await this.findChannelByUserId(userId)

        if (!existingChannel) {
            throw new RpcException('Chanel not exist')
        }

        const updatedChannel = await this.prismaService.channel.update({
            where: {
                userId: existingChannel.userId
            },
            data: {
                profilePicture: profilePicture,
                backgroundPicture: backgroundPicture
            }
        })

        return updatedChannel
    }

    public async findChannelById(id: string) {
        const channel = await this.prismaService.channel.findUnique({
            where: {
                id
            }
        })

        if (!channel) {
            throw new RpcException(`Channel by id not found`)
        }

        return channel
    }

    public async findChannelByUserId(userId: string) {
        const channel = await this.prismaService.channel.findUnique({
            where: {
                userId: userId
            },
            include: {
                subcriptions: true,
            }
        })

        if (!channel) {
            throw new RpcException(`Channel by id not found`)
        }

        return channel
    }

    public async findChannelByChannelId(channelId: string) {
        const channel = await this.prismaService.channel.findUnique({
            where: {
                id: channelId
            },
            include: {
                subcriptions: true,
            }
        })

        if (!channel) {
            throw new RpcException(`Channel by id not found`)
        }

        return channel
    }

    public async subscribe(channelId: string, userId: string) {
        const existingChannel = await this.findChannelById(channelId)
        const existingUser = await lastValueFrom(this.authService.findUserById({ id: userId }))

        const newSubscribtion = await this.prismaService.subscriptions.create({
            data: {
                channelId,
                userId,
            }
        })

        return newSubscribtion
    }

    public async subsrcribeWithNotif(channelId: string, userId: string) {
        const existingChannel = await this.findChannelById(channelId)
        const existingUser = await lastValueFrom(this.authService.findUserById({ id: userId }))

        const existingSubscribe = await this.prismaService.subscriptions.findUnique({
            where: {
                userId_channelId: {
                    userId,
                    channelId
                }
            }
        })

        if (existingSubscribe) {
            return await this.prismaService.subscriptions.update({
                where: {
                    userId_channelId: {
                        userId,
                        channelId
                    }
                },
                data: {
                    subscribeType: SubscribeType.NOTIFICATIONS
                }
            })
        }

        const subWithNotif = await this.prismaService.subscriptions.create({
            data: {
                channelId,
                userId,
                subscribeType: SubscribeType.NOTIFICATIONS
            }
        })

        return subWithNotif
    }

    public async unsubscribe(channelId: string, userId: string) {
        const existingChannel = await this.findChannelById(channelId)
        const existingUser = await lastValueFrom(this.authService.findUserById({ id: userId }))


        const existingSubscribe = await this.prismaService.subscriptions.findUnique({
            where: {
                userId_channelId: {
                    userId,
                    channelId
                }
            }
        })

        if (!existingSubscribe) {
            throw new RpcException('User not subcsribed')
        }

        await this.prismaService.subscriptions.delete({
            where: {
                userId_channelId: {
                    userId: existingSubscribe.userId,
                    channelId: existingSubscribe.channelId
                }
            }
        })

        return {
            bool: true
        }
    }


}
