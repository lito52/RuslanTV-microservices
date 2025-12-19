import { IsNumber, IsOptional, IsString } from "class-validator";

export class getAllChannelVideoDto {
    @IsOptional()
    @IsNumber()
    page: number
    @IsOptional()
    @IsNumber()
    pageSize: number
}