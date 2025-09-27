import { IsString, IsNotEmpty, IsEmail, Length, Validate, MinLength } from "class-validator"
import { IsPasswordsMatchingConstraint } from "src/libs/common/decorators/is-password-matching-constraint.decorator"

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    @Length(2, 30, { message: 'Имя должно быть от 2 до 30 символов' })
    username: string

    @IsString()
    @IsNotEmpty()
    @IsEmail({}, { message: 'Неправильный адрес почты' })
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8, { message: 'Пароль должен быть от 8 до 30 символов' })
    password: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8, { message: 'Пароль должен быть от 8 до 30 символов' })
    @Validate(IsPasswordsMatchingConstraint, {
        message: 'Пароли не совпадают'
    })
    passwordRepeat: string
}