import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Boolean, Channel, CHANNEL_SERVICE_NAME, ChannelServiceClient, CreateChannelRequest, FindChannelByIdRequest, FindChannelByUserIdRequest, FindChannelByUserIdResponse, SubscribeRequest, Subscription, UpdateChannelPicturesRequest, UpdateChannelRequest } from "../../interfaces/channel_service";

@Injectable()
export class ChannelServiceGrpcClientService implements ChannelServiceClient, OnModuleInit {
    private channelServiceClient: ChannelServiceClient

    constructor(@Inject(CHANNEL_SERVICE_NAME) private readonly client: ClientGrpc) { }

    public onModuleInit() {
        this.channelServiceClient = this.client.getService<ChannelServiceClient>(CHANNEL_SERVICE_NAME)
    }

    createChannel(request: CreateChannelRequest): Observable<Channel> {
        return this.channelServiceClient.createChannel(request)
    }
    updateChannel(request: UpdateChannelRequest): Observable<Channel> {
        return this.channelServiceClient.updateChannel(request)
    }
    updateChannelPictures(request: UpdateChannelPicturesRequest): Observable<Channel> {
        return this.channelServiceClient.updateChannelPictures(request)
    }
    findChannelByUserId(request: FindChannelByUserIdRequest): Observable<FindChannelByUserIdResponse> {
        return this.channelServiceClient.findChannelByUserId(request)
    }
    findChannelById(request: FindChannelByIdRequest): Observable<FindChannelByUserIdResponse> {
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