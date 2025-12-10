import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Boolean, Channel, CHANNEL_SERVICE_NAME, ChannelServiceClient, CreateChannelRequest, DeleteChannelRequest, FindChannelByUserIdRequest, SubscribeRequest, Subscription, UpdateChannelPicturesRequest, UpdateChannelRequest } from "src/interfaces/channel_service";

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

    deleteChannel(request: DeleteChannelRequest): Observable<Boolean> {
        return this.channelServiceClient.deleteChannel(request)
    }

    updateChannel(request: UpdateChannelRequest): Observable<Channel> {
        return this.channelServiceClient.updateChannel(request)
    }

    updateChannelPictures(request: UpdateChannelPicturesRequest): Observable<Channel> {
        return this.channelServiceClient.updateChannelPictures(request)
    }

    findChannelByUserId(request: FindChannelByUserIdRequest): Observable<Channel> {
        return this.channelServiceClient.findChannelByUserId(request)
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