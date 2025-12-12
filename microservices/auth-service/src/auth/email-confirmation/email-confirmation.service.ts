import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'
import { ConfirmationDto } from './dto/confirmation.dto';
import { UserService } from '../../user/user.service';
import { AuthService } from '../auth.service';
import { RpcException } from '@nestjs/microservices';
import { MailService } from '../../libs/mail/mail.service';
import { TokenType } from 'prisma/generated';
import { DatabaseService } from 'src/prisma/database.service';

@Injectable()
export class EmailConfirmationService {
    public constructor(
        private readonly prismaService: DatabaseService,
        private readonly mailService: MailService,
        private readonly userService: UserService,
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
    ) { }

    public async newVerification(dto: ConfirmationDto) {

        const existingToken = await this.prismaService.token.findUnique({
            where: {
                token: dto.token,

                type: TokenType.VERIFICATION
            }
        })

        if (!existingToken) {
            throw new RpcException({
                message: 'Токен подтверждения не найден. Пж убедитесь что у вас правильный токен'
            })
        }

        const hasExpired = new Date(existingToken.expiresIn) < new Date()

        if (hasExpired) {
            throw new RpcException({
                message: 'Токен подтверждения истек. Пж запросите ноывй токен для потверждения'
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
                isVerified: true
            }
        })

        await this.prismaService.token.delete({
            where: {
                id: existingToken.id,
                type: TokenType.VERIFICATION
            }
        })

        return existingUser
    }

    public async sendVerificationToken(email: string) {
        const verificationToken = await this.generateVerifictionToken(email)

        await this.mailService.sendConfirmationEmail(verificationToken.email, verificationToken.token)

        return true
    }

    private async generateVerifictionToken(email: string) {
        const token = uuidv4()
        const expiresIn = new Date(new Date().getTime() + 3600 * 1000)

        const existionToken = await this.prismaService.token.findFirst({
            where: {
                email,
                type: TokenType.VERIFICATION
            }
        })

        if (existionToken) {
            await this.prismaService.token.delete({
                where: {
                    id: existionToken.id,
                    type: TokenType.VERIFICATION
                }
            })
        }

        const verificationToken = await this.prismaService.token.create({
            data: {
                email,
                token,
                expiresIn,
                type: TokenType.VERIFICATION
            }
        })

        return verificationToken
    }
}
