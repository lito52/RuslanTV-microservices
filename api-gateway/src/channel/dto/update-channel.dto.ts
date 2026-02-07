import { IsNotEmpty, IsString, Length } from "class-validator"

export class UpdateChannelDto {
    @IsString()
    @IsNotEmpty()
    @Length(2, 30, { message: 'Имя должно быть от 2 до 30 символов' })
    name: string

    @IsString()
    @IsNotEmpty()
    @Length(2, 30, { message: 'Прозвище должно быть от 2 до 30 символов' })
    handle: string

    @IsString()
    @IsNotEmpty()
    @Length(2, 30, { message: 'Описание должно быть от 2 до 50 символов' })
    bio: string
}