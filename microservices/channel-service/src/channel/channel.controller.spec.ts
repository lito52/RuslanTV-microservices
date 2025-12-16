import { Test, TestingModule } from "@nestjs/testing";
import { ChannelController } from "./channel.controller";
import { ChannelService } from "./channel.service";
import { v4 as uuidv4 } from 'uuid'
import { Channel, CreateChannelRequest, FindChannelByUserIdRequest, SubscribeRequest, Subscription, UpdateChannelPicturesRequest, UpdateChannelRequest } from "../interfaces/channel_service";
import { User } from "../interfaces/auth_service";

jest.mock('uuid', () => ({
    v4: jest.fn(() => 'test-uuid-1234'),
    v1: jest.fn(() => 'test-uuid-v1-1234'),
    validate: jest.fn(),
    version: jest.fn()
}));

const channel: Channel = {
    id: uuidv4(),
    userId: '',
    name: '',
    handle: '',
    bio: '',
    profilePicture: '',
    backgroundPicture: '',
    subscriptions: [
        { id: uuidv4(), channelId: uuidv4(), userId: uuidv4(), subscribeType: '' },
        { id: uuidv4(), channelId: uuidv4(), userId: uuidv4(), subscribeType: '' },
    ],
}

const subscription: Subscription = {
    id: uuidv4(),
    channelId: uuidv4(),
    subscribeType: '',
    userId: uuidv4()
}

const createChannelRequest: CreateChannelRequest = {
    backgroundPicture: '',
    bio: '',
    handle: '',
    name: '',
    userId: uuidv4(),
    profilePicture: ""
}

const updateChannelRequest: UpdateChannelRequest = {
    userId: uuidv4(),
    name: "",
    handle: "",
    bio: ""
}

const updateChannelPicturesRequest: UpdateChannelPicturesRequest = {
    userId: uuidv4(),
    profilePicture: "",
    backgroundPicture: ""
}

const userId: FindChannelByUserIdRequest = {
    userId: uuidv4()
}

const subscribeRequest: SubscribeRequest = {
    userId: uuidv4(),
    channelId: uuidv4()
}

const user: User = {
    id: uuidv4(),
    username: "",
    picture: "",
    email: "",
    password: "",
    role: "",
    isVerified: false,
    isTwoFactorEnabled: false,
    method: ""
}

describe('ChannelController', () => {
    let controller: ChannelController;
    let service: ChannelService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ChannelController],
            providers: [
                {
                    provide: ChannelService,
                    useValue: {
                        createChannel: jest.fn().mockResolvedValue(channel),
                        updateChannel: jest.fn().mockResolvedValue(channel),
                        findChannelByUserId: jest.fn().mockResolvedValue(channel),
                        subscribe: jest.fn().mockResolvedValue(subscription),
                        subscribeWithNotif: jest.fn().mockResolvedValue(subscription),
                        unsubscribe: jest.fn().mockResolvedValue(Boolean),
                    },
                },
            ]
        }).compile()

        controller = module.get<ChannelController>(ChannelController)
        service = module.get<ChannelService>(ChannelService)
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    })

    it('should return channel', async () => {
        const result = await controller.createChannel(createChannelRequest)
        expect(result).toEqual(channel)
    })

    it('should return channel', async () => {
        const result = await controller.updateChannel(updateChannelRequest)
        expect(result).toEqual(channel)
    })

    it('should return channel', async () => {
        const result = await controller.findChannelByUserId(userId)
        expect(result).toEqual(channel)
    })

    it('should return subscription', async () => {
        const result = await controller.subscribe(subscribeRequest)
        expect(result).toEqual(subscription)
    })

    it('should return subscription', async () => {
        const result = await controller.subscribeWithNotif(subscribeRequest)
        expect(result).toEqual(subscription)
    })

    it('should return subscription', async () => {
        const result = await controller.unSubscribe(subscribeRequest)
        expect(result).toEqual(Boolean)
    })
})