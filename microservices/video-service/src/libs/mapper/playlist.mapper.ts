import { Playlist, PlaylistVideo } from "../../../prisma/generated";
import { Playlist as GrpcPlaylist, PlaylistVideo as GrpcPlaylistVideo } from "../../interfaces/video_service";

export function toIso(date: Date | string): string {
    return typeof date === 'string' ? date : date.toISOString();
}

export function mapPlaylist(playlist: Playlist & {
    playlist_video: PlaylistVideo[]
}): GrpcPlaylist {
    return {
        id: playlist.id,
        channelId: playlist.channel_id,
        text: playlist.text,
        videos: playlist.playlist_video.map(mapPlaylistVideo) ?? [],
        updatedAt: toIso(playlist.updatedAt),
        createdAt: toIso(playlist.createdAt),
    }
}

export function mapPlaylistVideo(playlistVideo: PlaylistVideo): GrpcPlaylistVideo {
    return {
        id: playlistVideo.id,
        playlistId: playlistVideo.playlist_id,
        position: playlistVideo.position,
        videoId: playlistVideo.video_id,
        updatedAt: toIso(playlistVideo.updatedAt),
        createdAt: toIso(playlistVideo.createdAt),
    }
}