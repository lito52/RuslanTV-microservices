import { IsNotEmpty, IsString } from "class-validator";

export class WatchVideoDto {
    @IsString()
    @IsNotEmpty()
    channelId: string;
}