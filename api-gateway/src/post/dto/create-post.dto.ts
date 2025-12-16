import { IsString, IsNotEmpty } from "class-validator";

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    text: string;
    @IsString()
    @IsNotEmpty()
    channelId: string;
}