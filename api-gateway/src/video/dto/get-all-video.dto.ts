import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class getAllVideoDto {
    page: number
    pageSize: number
}