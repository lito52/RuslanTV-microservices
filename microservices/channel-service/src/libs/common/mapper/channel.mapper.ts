import { Channel, Subscriptions } from "../../../../prisma/generated";
import { Channel as GrpcChannel, Subscription as GrpcSubscription } from "../../../interfaces/channel_service";

export function toIso(date: Date | string): string {
    return typeof date === 'string' ? date : date.toISOString();
}


export function mapSubscription(subscription: Subscriptions): GrpcSubscription {
    return {
        id: subscription.id,
        userId: subscription.userId,
        channelId: subscription.channelId,
        subscribeType: subscription.subscribeType,
    }
}


export function mapChannel(channel: Channel & {
    subscriptions?: Subscriptions[],
}): GrpcChannel {
    return {
        id: channel.id,
        name: channel.name,
        handle: channel.handle,
        bio: channel.bio,
        backgroundPicture: channel.backgroundPicture,
        profilePicture: channel.profilePicture,
        userId: channel.userId,
        subscriptions: channel.subscriptions?.map(mapSubscription) ?? []
    }
}
