import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Boolean, Channel, CHANNEL_SERVICE_NAME, ChannelServiceClient, CreateChannelRequest, FindChannelByIdRequest, SubscribeRequest, Subscription, UpdateChannelRequest } from "src/interfaces/channel_service";

@Injectable()
export class ChannelServiceGrpcClient implements ChannelServiceClient, OnModuleInit {
    private channelServiceClient: ChannelServiceClient

    constructor(@Inject(CHANNEL_SERVICE_NAME) private readonly client: ClientGrpc) { }

    public onModuleInit(): void {
        this.channelServiceClient = this.client.getService<ChannelServiceClient>(CHANNEL_SERVICE_NAME)
    }

    createChannel(request: CreateChannelRequest): Observable<Channel> {
        return this.channelServiceClient.createChannel(request)
    }

    updateChannel(request: UpdateChannelRequest): Observable<Channel> {
        return this.channelServiceClient.updateChannel(request)
    }

    findChannelById(request: FindChannelByIdRequest): Observable<Channel> {
        return this.channelServiceClient.findChannelById(request)
    }

    subscribe(request: SubscribeRequest): Observable<Subscription> {
        return this.channelServiceClient.subscribe(request)
    }

    subscribeWithNotif(request: SubscribeRequest): Observable<Subscription> {
        return this.channelServiceClient.subscribeWithNotif(request)
    }

    unSubscribe(request: SubscribeRequest): Observable<Boolean> {
        return this.channelServiceClient.unSubscribe(request)
    }

}