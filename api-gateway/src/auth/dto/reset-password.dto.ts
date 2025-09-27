import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'

export class ResetPasswordDto {
    @ApiProperty({
        description: 'Email пользователя',
        example: 'ruslan@mail.ru'
    })
    @IsEmail({}, { message: 'Введите корректный адрес электронной почты.' })
    @IsNotEmpty({ message: 'Поле email не может быть пустым.' })
    email: string
}