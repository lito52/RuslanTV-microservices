import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Request, Response } from 'express';
import { RegisterDto } from './dto/register.dto';
import { lastValueFrom } from 'rxjs';
import { AuthServiceGrpcClient } from '../grpc-services/auth-service-client.service';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { User } from '../interfaces/auth_service';
import { ConfirmationDto } from './dto/email-confirmation.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { NewPasswordDto } from './dto/new-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly authService: AuthServiceGrpcClient,
        private readonly configService: ConfigService
    ) { }

    public async resetPassword(dto: ResetPasswordDto) {
        try {
            return await lastValueFrom(this.authService.resetPassword(dto))
        } catch (e) {
            return {
                message: [e.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async newPassword(dto: NewPasswordDto, token: string) {
        try {
            return await lastValueFrom(this.authService.newPassword({
                password: dto.password,
                token
            }))
        } catch (e) {
            return {
                message: [e.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async newVerification(req: Request, dto: ConfirmationDto) {
        try {
            const user = await lastValueFrom(this.authService.newVerification(dto))
            return this.saveSession(req, user)
        } catch (e) {
            return {
                message: [e.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }

    public async getProfile(id: string) {
        try {
            const user = await lastValueFrom(this.authService.findProfile({
                id: id
            }))

            return user
        } catch (e) {
            return {
                message: [e.details],
                error: 'Unauthorized',
                statusCode: 401,
            }
        }
    }

    public async findById(id: string) {
        try {
            const user = await lastValueFrom(this.authService.findUserById({
                id: id
            }))
            return user
        } catch (e) {
            return {
                message: [e.details],
                error: 'Unauthorized',
                statusCode: 401,
            }
        }
    }


    public async updateUser(userId: string, dto: UpdateUserDto) {
        try {
            const user = await lastValueFrom(this.authService.updateUser({
                userId: userId,
                email: dto.email,
                username: dto.username,
                isTwoFactorEnabled: { bool: dto.isTwoFactorEnabled }
            }))
            return user
        } catch (e) {
            return {
                message: [e.details],
                error: 'Unauthorized',
                statusCode: 401,
            }
        }
    }

    public async register(req: Request, dto: RegisterDto) {
        try {
            const newUser = await lastValueFrom(this.authService.register(dto))

            this.saveSession(req, newUser)
            return {
                message: 'Вы успешно зарегались. Пожалуйста, подтвердите ваш email. Сообщение было отправлено на ваш почтовый ящик'
            }

        } catch (e) {
            return {
                message: [e.details],
                error: 'Conflict',
                statusCode: 409,
            }
        }
    }

    public async login(req: Request, dto: LoginDto) {
        try {
            const user = await lastValueFrom(this.authService.login(dto))
            return this.saveSession(req, user)
        } catch (e) {
            return {
                message: [e.details],
                error: 'Unauthorized',
                statusCode: 401
            }
        }
    }

    public async logout(req: Request, res: Response): Promise<void> {
        return new Promise((resolve, reject) => {
            req.session.destroy(err => {
                if (err) {
                    console.log('Ошибка при удалении сессии', err)
                    return reject(
                        new InternalServerErrorException('Не удалось завершить сессию. Возможно, возникла проблема с сервером или сессия уже была завершена')
                    )
                }
                res.clearCookie(this.configService.getOrThrow<string>('SESSION_NAME'))
                resolve()
            })
        })
    }

    public async oAuthCallBack(req: Request, provider: string, code: string) {
        const extractUser = await lastValueFrom(this.authService.oauthcallback({ provider: provider, code: code }))
        try {
            this.saveSession(req, extractUser)
        } catch (error) {
            throw new BadRequestException(error)
        }
        return extractUser
        // try {
        //     const extractUser = await lastValueFrom(this.authService.oauthcallback({ provider, code }))
        //     return this.saveSession(req, extractUser)
        // } catch (e) {
        //     return {
        //         message: [e.details],
        //         error: 'BadRequest',
        //         statusCode: 400
        //     }
        // }
    }

    public async oAuthConnect(provider: string) {
        try {
            const connect = await lastValueFrom(this.authService.oauthconnect({ provider }))
            return connect
        } catch (e) {
            return {
                message: [e.details],
                error: 'BadRequest',
                statusCode: 400
            }
        }
    }


    private async saveSession(req: Request, user: User) {
        return new Promise((resolve, reject) => {
            req.session.userId = user.id
            req.session.role = user.role

            req.session.save(err => {
                if (err) {
                    console.log('Ошибка при сохранении сессии', err)
                    return reject(
                        new InternalServerErrorException(
                            'Не удалось сохранить сессию. Проверьте, правильно ли настроены параметры сессии.'
                        )
                    )
                }

                resolve({
                    user
                })
            })
        })
    }
}
