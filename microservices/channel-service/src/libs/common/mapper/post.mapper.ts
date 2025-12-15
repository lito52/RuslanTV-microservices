import { Post, PostComments, PostLikes, PostMedia } from "../../../../prisma/generated";
import { Media as GrpcMedia, Like as GrpcLike, Comment as GrpcComment, Post as GrpcPost } from "../../../interfaces/post_service";

export function toIso(date: Date | string): string {
    return typeof date === 'string' ? date : date.toISOString();
}

export function mapMedia(media: PostMedia): GrpcMedia {
    return {
        id: media.id,
        url: media.url,
        postId: media.postId,
        updatedAt: toIso(media.updatedAt),
        createdAt: toIso(media.createdAt),
    }
}

export function mapLike(like: PostLikes): GrpcLike {
    return {
        id: like.id,
        postId: like.postId ?? '',
        parentId: like.parentId ?? '',
        reaction: like.reaction ?? '',
        updatedAt: toIso(like.updatedAt),
        createdAt: toIso(like.createdAt),
    }
}

export function mapComment(comment: PostComments): GrpcComment {
    return {
        id: comment.id,
        postId: comment.postId ?? '',
        parentId: comment.parentId ?? '',
        text: comment.text,
        updatedAt: toIso(comment.updatedAt),
        createdAt: toIso(comment.createdAt),
    }
}

export function mapPost(post: Post & {
    medias?: PostMedia[],
    likes?: PostLikes[],
    comments?: PostComments[],
}): GrpcPost {
    return {
        id: post.id,
        text: post.text,
        channelId: post.channelId,
        postMedias: post.medias?.map(mapMedia) ?? [],
        postComments: post.comments?.map(mapComment) ?? [],
        postLikes: post.likes?.map(mapLike) ?? [],
        updatedAt: toIso(post.updatedAt),
        createdAt: toIso(post.createdAt),
    }
}

export function mapManyPosts(posts: (Post & {
    medias?: PostMedia[],
    likes?: PostLikes[],
    comments?: PostComments[]
})[]): GrpcPost[] {
    return posts.map(mapPost);
}