import { BadRequestException, Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { Request, Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { Authorized } from './decorators/authorized.decorator';
import { Authorization } from './decorators/auth.decorator';
import { ConfigService } from '@nestjs/config';
import { Recaptcha } from '@nestlab/google-recaptcha';
import { ConfirmationDto } from './dto/email-confirmation.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { NewPasswordDto } from './dto/new-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponse, UserRole } from './types/types';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly configService: ConfigService
	) { }

	@ApiOperation({
		summary: 'Сброс пароль пользователя',
		description: 'Сбрасывает пароль пользователя и отправляет токен на указанный email.'
	})
	@ApiBody({
		description: 'Сброс пароль пользователя',
		type: ResetPasswordDto,
		required: true
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Пароль сброшен'
	})
	@Recaptcha()
	@Post('reset-password')
	@HttpCode(HttpStatus.OK)
	public async resetPassword(@Body() dto: ResetPasswordDto) {
		return this.authService.resetPassword(dto)
	}

	@ApiOperation({
		summary: 'Изменить пароль пользователя',
		description: 'Устанавливает новый пароль для пользователя.'
	})
	@ApiBody({
		description: 'Изменить пароль пользователя',
		type: NewPasswordDto,
		required: true
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Пароль изменен'
	})
	@Recaptcha()
	@Post('new-password/:token')
	@HttpCode(HttpStatus.OK)
	public async newPassword(@Body() dto: NewPasswordDto, @Param('token') token: string) {
		return this.authService.newPassword(dto, token)
	}

	@ApiOperation({
		summary: 'Подтверждение почты пользователя',
		description: 'Подтверждает почту пользователя.'
	})
	@ApiBody({
		description: 'Подтверждение почты пользователя',
		type: ConfirmationDto,
		required: true
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Почта успешно подтверждена!'
	})
	@Post('email-confirmation')
	@HttpCode(HttpStatus.OK)
	public async newVerification(@Req() req: Request, @Body() dto: ConfirmationDto) {
		return this.authService.newVerification(req, dto)
	}

	@ApiOperation({
		summary: 'Регистрация нового пользователя',
		description: 'Регистрация пользователя с отправкой письма на почту для подтверждения регистрации.'
	})
	@ApiBody({
		description: 'Регистрация нового пользователя',
		type: RegisterDto,
		required: true
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Вы успешно зарегались. Пожалуйста, подтвердите ваш email. Сообщение было отправлено на ваш почтовый ящик'
	})
	@UseGuards(Recaptcha)
	@Post('register')
	@HttpCode(HttpStatus.OK)
	public async register(@Req() req: Request, @Body() dto: RegisterDto) {
		return this.authService.register(req, dto)
	}

	@ApiOperation({
		summary: 'Авторизация пользователя',
		description: 'Авторизация пользователя'
	})
	@ApiBody({
		description: 'Авторизация пользователя',
		type: LoginDto,
		required: true
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Вы вошли в свой аккуант.'
	})
	@UseGuards(Recaptcha)
	@Post('login')
	@HttpCode(HttpStatus.OK)
	public async login(@Req() req: Request, @Body() dto: LoginDto) {
		return this.authService.login(req, dto)
	}

	@ApiOperation({
		summary: 'Oauth2 callback',
		description: 'Oauth2 callback'
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Oauth2 callback'
	})
	@Get('/oauth/callback/:provider')
	public async oAuthCallBack(
		@Req() req: Request,
		@Res({ passthrough: true }) res: Response,
		@Query('code') code: string,
		@Param('provider') provider: string,
	) {
		if (!code) {
			throw new BadRequestException('Не был предоставлен код авторизации')
		}

		await this.authService.oAuthCallBack(req, provider, code)

		return res.redirect(
			`${this.configService.getOrThrow<string>('ALLOWED_ORIGIN')}/dashboard/settings`
		)
	}

	@ApiOperation({
		summary: 'Oauth2 Регистрация',
		description: 'Oauth2 Регистрация'
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Вы успешно зарегестрировались',
		example: {
			redirectURL: 'https://example.com/oauth/callback'
		}
	})
	@Get('/oauth/connect/:provider')
	public async oAuthConnect(@Param('provider') provider: string) {
		return this.authService.oAuthConnect(provider)
	}

	@ApiOperation({
		summary: 'Выход пользвателя из системы',
		description: 'Выход пользователя и удаление сессии'
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Вы вышли из своего аккаунта.'
	})
	@Post('logout')
	@HttpCode(HttpStatus.OK)
	public async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
		return this.authService.logout(req, res)
	}

	@ApiOperation({
		summary: 'Получения профиля пользователя',
		description: 'Получения профиля пользователя'
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Профиль польозвателя успешно получен',
		example: UserResponse
	})
	@Authorization()
	@Get('profile')
	@HttpCode(HttpStatus.OK)
	public async findProfile(@Authorized('id') userId: string) {
		return this.authService.getProfile(userId)
	}


	@ApiOperation({
		summary: 'Получение аккаунта пользователя по айди',
		description: 'Получение аккаунта пользователя по айди'
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Получение аккаунта пользователя по айди',
		example: UserResponse
	})
	@Authorization(UserRole.ADMIN)
	@HttpCode(HttpStatus.OK)
	@Get('findUserById/:id')
	public async findUserById(@Param('id') id: string) {
		return this.authService.findById(id)
	}

	@ApiOperation({
		summary: 'обновление профиля польозвателя',
		description: 'обновление профиля польозвателя'
	})
	@ApiBody({
		description: 'обновление профиля польозвателя',
		type: UpdateUserDto,
		required: true
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'обновление профиля польозвателя'
	})
	@Authorization(UserRole.ADMIN)
	@HttpCode(HttpStatus.OK)
	@Patch('updateUser')
	public async updateUser(@Authorized('id') userId: string, @Body() dto: UpdateUserDto) {
		return this.authService.updateUser(userId, dto)
	}

}
