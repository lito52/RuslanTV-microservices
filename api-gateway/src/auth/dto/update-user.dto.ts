import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class UpdateUserDto {
    @ApiProperty({
        description: 'Username пользователя',
        example: '12345678'
    })
    @IsString({ message: 'Имя должно быть строкой.' })
    @IsNotEmpty({ message: 'Имя обязательно для заполнения.' })
    username: string

    @ApiProperty({
        description: 'Email пользователя',
        example: 'ruslan@mail.ru'
    })
    @IsString({ message: 'Email должен быть строкой.' })
    @IsEmail({}, { message: 'Некорректный формат email.' })
    @IsNotEmpty({ message: 'Email обязателен для заполнения.' })
    email: string

    @ApiProperty({
        description: 'Двухфакторная аутентификация пользователя',
        example: false
    })
    @IsBoolean({ message: 'isTwoFactorEnabled должно быть булевым значением.' })
    isTwoFactorEnabled: boolean
}