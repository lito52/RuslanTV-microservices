import { Test, TestingModule } from "@nestjs/testing";
import { ChannelService } from "./channel.service";
import { Boolean, Channel, CreateChannelRequest, FindChannelByUserIdRequest, SubscribeRequest, Subscription, UpdateChannelPicturesRequest, UpdateChannelRequest } from "../interfaces/channel_service";
import { DatabaseService } from "../prisma/database.service";
import { AuthServiceGrpcClientService } from "../grpc/grpc-services/auth-service-grpc-client.service";
import { User } from "../interfaces/auth_service";
import { of } from "rxjs";

const channel: Channel = {
    id: "1511e131-67c5-4789-9ee6-382f04a76f48",
    userId: '30ff8286-9b0a-45a0-af60-9e8f1e06c069',
    name: 'sit',
    handle: 'Ut et deserunt ullamco',
    bio: 'ullamco in',
    profilePicture: 'cillum enim nulla voluptate do',
    backgroundPicture: 'culpa dolore',
    subscriptions: [],
}

const subscription: Subscription = {
    id: "46a3cd7f-8abc-47a9-8a9c-babdd756eda2",
    channelId: "1511e131-67c5-4789-9ee6-382f04a76f48",
    subscribeType: 'REGULAR',
    userId: "30ff8286-9b0a-45a0-af60-9e8f1e06c069"
}

const subscriptions: Subscription[] = [
    subscription,
    {
        ...subscription,
        id: ''
    },
]

const createChannelRequest: CreateChannelRequest = {
    userId: '30ff8286-9b0a-45a0-af60-9e8f1e06c069',
    name: 'sit',
    handle: 'Ut et deserunt ullamco',
    bio: 'ullamco in',
    profilePicture: 'cillum enim nulla voluptate do',
    backgroundPicture: 'culpa dolore',
}

const updateChannelRequest: UpdateChannelRequest = {
    userId: "0da539cb-5032-4766-aaf4-69eec10e1fb",
    name: "",
    handle: "",
    bio: ""
}

const updateChannelPicturesRequest: UpdateChannelPicturesRequest = {
    userId: "0da529cb-3456-4766-aaf4-69eec10e1fb",
    profilePicture: "",
    backgroundPicture: ""
}

const findChannelByUserIdRequest: FindChannelByUserIdRequest = {
    userId: "0da529cb-3453-4766-aaf4-69eec10e1fb"
}

const subscribeRequest: SubscribeRequest = {
    userId: "0da529cb-5022-5646-aaf4-69eec10e1fb",
    channelId: "0da529cb-4442-4446-aaf4-69eec10e1fb"
}

const bool: Boolean = {
    bool: true
}

const user: User = {
    id: "0da529cb-4324-4766-aaf4-69eec10e1fb",
    username: "",
    picture: "",
    email: "",
    password: "",
    role: "",
    isVerified: false,
    isTwoFactorEnabled: false,
    method: ""
}
const channels: Channel[] = [
    { id: "0da333cb-4324-4766-aaf4-69eec10e2fb", userId: '', name: '', handle: '', bio: '', profilePicture: '', backgroundPicture: '', subscriptions: [] },
    { id: "0da333cb-4324-4766-aaf4-22eec20e2fb", userId: '', name: '', handle: '', bio: '', profilePicture: '', backgroundPicture: '', subscriptions: [] },
]

const db = {
    channel: {
        findMany: jest.fn().mockResolvedValue(channels),
        findUnique: jest.fn()
            .mockResolvedValueOnce(null)
            .mockResolvedValue(channel),
        create: jest.fn().mockResolvedValue(channel),
        update: jest.fn().mockResolvedValue(channel)
    },
    subscriptions: {
        findMany: jest.fn().mockResolvedValue(subscriptions),
        findUnique: jest.fn()
            .mockResolvedValueOnce(null)
            .mockResolvedValue(subscription),
        create: jest.fn().mockResolvedValue(subscription),
        update: jest.fn().mockResolvedValue(subscription),
        delete: jest.fn().mockResolvedValue(bool)
    }
}

const authService = {
    findUserById: jest.fn().mockReturnValue(of(user)),
}

describe('Channel Service', () => {
    let service: ChannelService
    let prismaService: DatabaseService
    let authServiceGrpcClientService: AuthServiceGrpcClientService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ChannelService,
                {
                    provide: DatabaseService,
                    useValue: db,
                },
                {
                    provide: AuthServiceGrpcClientService,
                    useValue: authService,
                }
            ]
        }).compile()
        service = module.get<ChannelService>(ChannelService)
        prismaService = module.get<DatabaseService>(DatabaseService)
        authServiceGrpcClientService = module.get<AuthServiceGrpcClientService>(AuthServiceGrpcClientService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined();
    })

    it('should return an channel', async () => {
        const res = await service.createChannel(createChannelRequest)
        expect(res).toEqual(channel)
    })

    it('should return an channel', async () => {
        const res = await service.updateChannel(updateChannelRequest.userId, { bio: updateChannelRequest.bio, handle: updateChannelRequest.handle, name: updateChannelRequest.name })
        expect(res).toEqual(channel)
    })

    it('should return an channel', async () => {
        const res = await service.findChannelByUserId(findChannelByUserIdRequest.userId)
        expect(res).toEqual(channel)
    })

    it('should return an subscribe', async () => {
        const res = await service.subscribe(subscribeRequest.channelId, subscribeRequest.userId)
        expect(res).toEqual(subscription)
    })

    it('should return an subscribe', async () => {
        const res = await service.subscribeWithNotif(subscribeRequest.channelId, subscribeRequest.userId)
        expect(res).toEqual(subscription)
    })

    it('should return an boolean', async () => {
        const res = await service.unsubscribe(subscribeRequest.channelId, subscribeRequest.userId)
        expect(res).toEqual(bool)
    })
})


