import { Controller } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { GrpcMethod, GrpcService } from '@nestjs/microservices';
import { Boolean, Channel, ChannelServiceController, CreateChannelRequest, FindChannelByUserIdRequest, FindChannelByUserIdResponse, SubscribeRequest, Subscription, UpdateChannelPicturesRequest, UpdateChannelRequest, } from 'src/interfaces/channel_service';
import { Observable } from 'rxjs';

@GrpcService()
export class ChannelController implements ChannelServiceController {
  constructor(private readonly channelService: ChannelService) { }

  @GrpcMethod('ChannelService', 'FindChannelByUserId')
  findChannelByUserId(request: FindChannelByUserIdRequest): Promise<FindChannelByUserIdResponse> | Observable<FindChannelByUserIdResponse> | FindChannelByUserIdResponse {
    return this.channelService.findChannelByUserId(request.userId)
  }

  @GrpcMethod('ChannelService', 'CreateChannel')
  createChannel(request: CreateChannelRequest): Promise<Channel> | Observable<Channel> | Channel {
    return this.channelService.createChannel(request)
  }

  @GrpcMethod('ChannelService', 'UpdateChannel')
  updateChannel(request: UpdateChannelRequest): Promise<Channel> | Observable<Channel> | Channel {
    return this.channelService.updateChannel(request.userId, { name: request.name, handle: request.handle, bio: request.bio, })
  }

  @GrpcMethod('ChannelService', 'UpdateChannelPictures')
  updateChannelPictures(request: UpdateChannelPicturesRequest): Promise<Channel> | Observable<Channel> | Channel {
    return this.channelService.updateChannelPicture(request.userId, request.profilePicture, request.backgroundPicture)
  }


  @GrpcMethod('ChannelService', 'Subscribe')
  subscribe(request: SubscribeRequest): Promise<Subscription> | Observable<Subscription> | Subscription {
    return this.channelService.subscribe(request.channelId, request.userId)
  }

  @GrpcMethod('ChannelService', 'SubscribeWithNotif')
  subscribeWithNotif(request: SubscribeRequest): Promise<Subscription> | Observable<Subscription> | Subscription {
    return this.channelService.subsrcribeWithNotif(request.channelId, request.userId)
  }

  @GrpcMethod('ChannelService', 'UnSubscribe')
  unSubscribe(request: SubscribeRequest): Promise<Boolean> | Observable<Boolean> | Boolean {
    return this.channelService.unsubscribe(request.channelId, request.userId)
  }

}
