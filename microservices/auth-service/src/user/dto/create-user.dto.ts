import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl, Length } from "class-validator"
import { AuthMethod } from "prisma/generated"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Length(2, 30, { message: 'Имя должно быть от 2 до 30 символов' })
    username: string

    @IsNotEmpty()
    @IsString()
    picture: string

    @IsString()
    @IsNotEmpty()
    @IsEmail({}, { message: 'Неправильный адрес почты' })
    email: string

    @IsString()
    @IsNotEmpty()
    @Length(8, 30, { message: 'Пароль должен быть от 8 до 30 символов' })
    password: string

    @IsBoolean()
    isVerified: boolean

    @IsString()
    @IsEnum(AuthMethod)
    method: AuthMethod
}