import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsString, IsNotEmpty, IsEmail, Length, IsOptional } from "class-validator"

export class LoginDto {
    @ApiProperty({
        description: 'Email пользователя',
        example: 'ruslan@mail.ru'
    })
    @IsString()
    @IsNotEmpty()
    @IsEmail({}, { message: 'Неправильный адрес почты' })
    email: string

    @ApiProperty({
        description: 'Пароль пользователя',
        example: '12345678'
    })
    @IsString()
    @IsNotEmpty()
    @Length(8, 30, { message: 'Пароль должен быть от 8 до 30 символов' })
    password: string

    @ApiPropertyOptional({
        description: 'Код двухфакторной аутентификации (необязательно)',
        example: '123456'
    })
    @IsOptional()
    @IsString()
    code: string
}