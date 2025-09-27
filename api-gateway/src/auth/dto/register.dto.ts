import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty, IsEmail, Length, Validate, MinLength } from "class-validator"
import { IsPasswordsMatchingConstraint } from "../../libs/common/decorators/is-password-matching-constraint.decorator"

export class RegisterDto {
    @ApiProperty({
        description: 'Username пользователя',
        example: 'l1to'
    })
    @IsString()
    @IsNotEmpty()
    @Length(2, 30, { message: 'Имя должно быть от 2 до 30 символов' })
    username: string

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
    @MinLength(8, { message: 'Пароль должен быть от 8 до 30 символов' })
    password: string

    @ApiProperty({
        description: 'Подтверждение пароля пользователя',
        example: '12345678'
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(8, { message: 'Пароль должен быть от 8 до 30 символов' })
    @Validate(IsPasswordsMatchingConstraint, {
        message: 'Пароли не совпадают'
    })
    passwordRepeat: string
}