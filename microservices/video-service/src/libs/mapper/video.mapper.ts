import { Comment, Like, Video, VideoView } from "../../../prisma/generated";
import { Video as GrpcVideo, Like as GrpcLike, Comment as GrpcComment, View as GrpcView } from "../../interfaces/video_service";

export function toIso(date: Date | string): string {
    return typeof date === 'string' ? date : date.toISOString();
}

export function mapLike(like: Like): GrpcLike {
    return {
        id: like.id,
        channelId: like.channelId ?? '',
        videoId: like.videoId ?? '',
        reactionType: like.reaction ?? '',
        updatedAt: toIso(like.updatedAt),
        createdAt: toIso(like.createdAt),
    }
}

export function mapView(view: VideoView): GrpcView {
    return {
        id: view.id,
        channelId: view.channelId,
        videoId: view.videoId,
        updatedAt: toIso(view.updatedAt),
        createdAt: toIso(view.createdAt),
    }
}

export function mapComment(comment: Comment): GrpcComment {
    return {
        id: comment.id,
        channelId: comment.channelId ?? '',
        videoId: comment.videoId ?? '',
        text: comment.text,
        updatedAt: toIso(comment.updatedAt),
        createdAt: toIso(comment.createdAt),
    }
}

export function mapVideo(video: Video & {
    views?: VideoView[],
    likes?: Like[],
    comments?: Comment[],
}): GrpcVideo {
    return {
        id: video.id,
        channelId: video.channelId,
        title: video.title,
        status: video.status,
        description: video.description,
        previewUrl: video.previewUrl,
        videoUrl: video.videoUrl,
        comments: video.comments?.map(mapComment) ?? [],
        likes: video.likes?.map(mapLike) ?? [],
        views: video.views?.map(mapView) ?? [],
        updatedAt: toIso(video.updatedAt),
        createdAt: toIso(video.createdAt),
    }
}

export function mapManyVideos(videos: (Video & {
    views?: VideoView[],
    likes?: Like[],
    comments?: Comment[],
})[]): GrpcVideo[] {
    return videos.map(mapVideo);
}