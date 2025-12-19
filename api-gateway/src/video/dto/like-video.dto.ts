import { IsNotEmpty, IsString } from "class-validator";

export class LikeVideoDto {
    @IsString()
    @IsNotEmpty()
    channelId: string;
}