import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, MinLength } from 'class-validator'

export class NewPasswordDto {
    @ApiProperty({
        description: 'Пароль пользователя',
        example: '12345678'
    })
    @IsString({ message: 'Пароль должен быть строкой.' })
    @MinLength(6, { message: 'Пароль должен содержать не менее 6 символов.' })
    @IsNotEmpty({ message: 'Поле новый пароль не может быть пустым.' })
    password: string
}