import { IsNotEmpty, IsString } from "class-validator";

export class UpdateVideoStatusDto {
    @IsString()
    @IsNotEmpty()
    status: string;
    @IsString()
    @IsNotEmpty()
    videoId: string;
    @IsString()
    @IsNotEmpty()
    channelId: string;
}