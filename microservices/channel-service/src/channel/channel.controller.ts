import { Controller } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { GrpcMethod, GrpcService } from '@nestjs/microservices';
import { Boolean, Channel, ChannelServiceController, CreateChannelRequest, FindChannelByIdRequest, SubscribeRequest, Subscription, UpdateChannelRequest, } from 'src/interfaces/channel_service';
import { Observable } from 'rxjs';

@GrpcService()
export class ChannelController implements ChannelServiceController {
  constructor(private readonly channelService: ChannelService) { }

  @GrpcMethod('ChannelService', 'CreateChannel')
  createChannel(request: CreateChannelRequest): Promise<Channel> | Observable<Channel> | Channel {
    return this.channelService.createChannel(request)
  }

  @GrpcMethod('ChannelService', 'UpdateChannel')
  updateChannel(request: UpdateChannelRequest): Promise<Channel> | Observable<Channel> | Channel {
    return this.channelService.updateChannel(request.channelId, { name: request.name, bio: request.bio })
  }

  @GrpcMethod('ChannelService', 'FindChannelById')
  findChannelById(request: FindChannelByIdRequest): Promise<Channel> | Observable<Channel> | Channel {
    return this.channelService.findChannelById(request.id)
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
