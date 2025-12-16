import { Injectable } from '@nestjs/common';
import { MailService } from '../../libs/mail/mail.service';
import { v4 as uuidv4 } from 'uuid'
import { UserService } from '../../user/user.service';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { RpcException } from '@nestjs/microservices';
import { NewPasswordDto } from './dto/new-password.dto';
import { hash } from 'argon2';
import { TokenType } from '../../../prisma/generated';
import { DatabaseService } from '../../prisma/database.service';

@Injectable()
export class PasswordRecoveryService {
    public constructor(
        private readonly prismaService: DatabaseService,
        private readonly userService: UserService,
        private readonly mailService: MailService,
    ) { }

    public async resetPassword(dto: ResetPasswordDto) {
        const existingUser = await this.userService.findUserByEmail(dto.email)

        if (!existingUser) {
            throw new RpcException({
                message: 'Пользователь не найден. Пожалуйста, проверьте введенный адрес электронной почты и попробуйте снова'
            })
        }

        const passwordResetToken = await this.generatePasswordResetToken(existingUser.email)

        await this.mailService.sendPasswordResetEmail(passwordResetToken.email, passwordResetToken.token)

        return {
            bool: true
        }
    }

    public async newPassword(dto: NewPasswordDto) {
        const existingToken = await this.prismaService.token.findFirst({
            where: {
                token: dto.token,
                type: TokenType.PASSWORD_RESET
            }
        })

        if (!existingToken) {
            throw new RpcException({
                message: 'Токен не найден. Пожалуйста, проверьте правильность введенного токена или запросите новый.'
            })
        }

        const hasExpired = new Date(existingToken.expiresIn) < new Date()

        if (hasExpired) {
            throw new RpcException({
                message: 'Токен истек. Пж запросите ноывй токен для потверждения сброса пароля'
            })
        }

        const existingUser = await this.userService.findUserByEmail(existingToken.email)

        if (!existingUser) {
            throw new RpcException({
                message: 'Пользователь не найден. Пожалуйста, проверьте введенный адрес электронной почты и попробуйте снова'
            })
        }

        await this.prismaService.user.update({
            where: {
                id: existingUser.id
            },
            data: {
                password: await hash(dto.password)
            }
        })

        await this.prismaService.token.delete({
            where: {
                id: existingToken.id,
                type: TokenType.PASSWORD_RESET
            }
        })

        return {
            bool: true
        }

    }

    private async generatePasswordResetToken(email: string) {
        const token = uuidv4()
        const expiresIn = new Date(new Date().getTime() + 3600 * 1000)

        const existionToken = await this.prismaService.token.findFirst({
            where: {
                email,
                type: TokenType.PASSWORD_RESET
            }
        })

        if (existionToken) {
            await this.prismaService.token.delete({
                where: {
                    id: existionToken.id,
                    type: TokenType.PASSWORD_RESET
                }
            })
        }

        const passwordResetToken = await this.prismaService.token.create({
            data: {
                email,
                token,
                expiresIn,
                type: TokenType.PASSWORD_RESET
            }
        })

        return passwordResetToken
    }
}
