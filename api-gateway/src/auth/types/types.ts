import { ApiProperty } from "@nestjs/swagger";

export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN"
}

export class UserResponse {
    @ApiProperty(
        {
            description: 'ID пользователя',
            example: '32b0412f-78ce-4229-ad02-d903b19e3855'
        }
    )
    id: string;

    @ApiProperty({
        description: 'Email пользователя',
        example: 'ruslan@mail.ru'
    })
    email: string;

    @ApiProperty({
        description: 'Пароль пользователя',
        example: '12345678'
    })
    password: string;

    @ApiProperty({
        description: 'Имя пользователя',
        example: 'Ruslan'
    })
    username: string;

    @ApiProperty({
        description: 'Изображение',
        nullable: true
    })
    picture: string | null;

    @ApiProperty({
        description: 'Роль пользователя',
        example: 'user'
    })
    role: string;

    @ApiProperty({
        description: 'Подтвержден ли пользователь',
        example: true
    })
    isVerified: boolean;

    @ApiProperty({
        description: 'Включена ли двухфакторная аутентификация',
        example: false
    })
    isTwoFactorEnabled: boolean;

    @ApiProperty({
        description: 'Метод аутентификации',
        example: 'CREDENTIALS, GOOGLE, YANDEX'
    })
    method: string;

    @ApiProperty({
        description: 'Дата создания пользователя',
        example: '2023-10-01T00:00:00.000Z'
    })
    createdAt: Date;

    @ApiProperty({
        description: 'Дата обновления пользователя',
        example: '2023-10-01T00:00:00.000Z'
    })
    updatedAt: Date;
}