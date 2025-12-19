import { IsNotEmpty, IsString } from "class-validator";

export class AddVideoToPlaylistDto {
    @IsString()
    @IsNotEmpty()
    playlistId: string;
}