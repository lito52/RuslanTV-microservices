import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/register.dto';
import { verify } from 'argon2';
import { LoginDto } from './dto/login.dto';
import { ProviderService } from './provider/provider.service';
import { PrismaService } from '../prisma/prisma.service';
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service';
import { UpdateUserDto } from './dto/update-user-dto';
import { AuthMethod } from '../../prisma/__generated__';
import { TwoFactorAuthService } from './two-factor-auth/two-factor-auth.service';

@Injectable()
export class AuthService {
    public constructor(
        private readonly prismaService: PrismaService,
        private readonly userService: UserService,
        private readonly providerService: ProviderService,
        private readonly emailConfirmationService: EmailConfirmationService,
        private readonly twoFactorAuthService: TwoFactorAuthService
    ) { }

    public async register(dto: RegisterDto) {
        const existUserByEmail = await this.userService.findUserByEmail(dto.email)

        if (existUserByEmail) {
            throw new RpcException({ message: 'User with this email already exists' })
        }

        const newUser = await this.userService.createUser({
            username: dto.username,
            email: dto.email,
            password: dto.password,
            picture: '',
            isVerified: false,
            method: AuthMethod.CREDENTIALS,
        })

        await this.emailConfirmationService.sendVerificationToken(newUser.email)

        return newUser
    }

    public async login(dto: LoginDto) {

        const user = await this.userService.findUserByEmail(dto.email)

        if (!user || !user.password) {
            throw new RpcException({ message: 'Пользователь не найден. Проверьте введенные данные' })
        }

        const isValidPassword = await verify(user.password, dto.password)

        if (!isValidPassword) {
            throw new RpcException({ message: 'Неверный пароль. Попробуйте еще раз или восстановите пароль, если забыли его.' })
        }

        if (!user.isVerified) {
            await this.emailConfirmationService.sendVerificationToken(user.email)
            throw new RpcException(
                { message: 'Ваш email не подтвержден. Пожалуйста, проверьте вашу почту и подтвердите адрес.' }
            )
        }

        if (user.isTwoFactorEnabled) {
            if (!dto.code) {
                await this.twoFactorAuthService.sendTwoFactorToken(user.email)

                throw new RpcException({
                    message: 'Проверьте вашу почту. Требуется код двухфакторной аутентификации.'
                })
            }

            await this.twoFactorAuthService.validateTwoFactorToken(user.email, dto.code)
        }

        return user
    }

    public async extractProfileFromCode(provider: string, code: string) {

        const providerInstance = this.providerService.findByService(provider)
        const profile = await providerInstance.findUserByCode(code)

        const account = await this.prismaService.account.findFirst({
            where: {
                id: profile.id,
                provider: profile.provider
            }
        })
        let user = account?.userId ? await this.userService.findUserById(account.userId) : null

        // let user = await this.userService.findUserByEmail(profile.email)

        if (user) {
            return user
        }

        user = await this.userService.createUser({
            username: profile.name,
            email: profile.email,
            password: '',
            picture: profile.picture,
            isVerified: true,
            method: AuthMethod[profile.provider.toUpperCase()],
        })


        if (!account) {
            await this.prismaService.account.create({
                data: {
                    userId: user.id,
                    type: 'oauth',
                    provider: profile.provider,
                    accessToken: profile.access_token,
                    refreshToken: profile.refresh_token,
                    expiresAt: profile.expires_at
                }
            })
        }

        return user
    }

    public async findUserById(id: string) {
        return await this.userService.findUserById(id)
    }

    public async updateUser(userId: string, dto: UpdateUserDto) {
        return await this.userService.updateUser(userId, dto)
    }

}
