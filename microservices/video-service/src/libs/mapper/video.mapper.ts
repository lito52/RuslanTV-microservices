import { Comment, Like, Video, VideoView } from "../../../prisma/generated";
import { Video as GrpcVideo, Like as GrpcLike, Comment as GrpcComment, View as GrpcView } from "../../interfaces/video_service";

export function toIso(date: Date | string): string {
    return typeof date === 'string' ? date : date.toISOString();
}

export function mapLike(like: Like): GrpcLike {
    return {
        id: like.id,
        channelId: like.channel_id ?? '',
        videoId: like.video_id ?? '',
        reactionType: like.reaction ?? '',
        updatedAt: toIso(like.updatedAt),
        createdAt: toIso(like.createdAt),
    }
}

export function mapView(view: VideoView): GrpcView {
    return {
        id: view.id,
        channelId: view.channel_id,
        videoId: view.video_id,
        updatedAt: toIso(view.updatedAt),
        createdAt: toIso(view.createdAt),
    }
}

export function mapComment(comment: Comment): GrpcComment {
    return {
        id: comment.id,
        channelId: comment.channel_id ?? '',
        videoId: comment.video_id ?? '',
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
        channelId: video.channel_id,
        title: video.title,
        status: video.status,
        description: video.description,
        previewUrl: video.preview_url,
        videoUrl: video.video_url,
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