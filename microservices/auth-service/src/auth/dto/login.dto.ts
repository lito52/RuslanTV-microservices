import { IsString, IsNotEmpty, IsEmail, Length, IsOptional } from "class-validator"

export class LoginDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail({}, { message: 'Неправильный адрес почты' })
    email: string

    @IsString()
    @IsNotEmpty()
    @Length(8, 30, { message: 'Пароль должен быть от 8 до 30 символов' })
    password: string

    @IsOptional()
    @IsString()
    code?: string
}