import { AuthService } from './auth.service';
import { GrpcMethod, GrpcService, RpcException } from '@nestjs/microservices';
import { AuthServiceController, Boolean, FindProfileRequest, FindUserByIdRequest, LoginDto, NewPasswordDto, NewVerificationRequest, OAuthCallBackRequest, OAuthConnectRequest, OAuthConnectResponse, RegisterDto, ResetPasswordDto, UpdateUserDto, User } from './interface/auth_service';
import { UseGuards } from '@nestjs/common';
import { ProviderGuard } from './guards/provider.guard';
import { ProviderService } from './provider/provider.service';
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service';
import { PasswordRecoveryService } from './password-recovery/password-recovery.service';
import { Observable } from 'rxjs';

@GrpcService()
export class AuthController implements AuthServiceController {
    public constructor(
        private readonly authService: AuthService,
        private readonly providerService: ProviderService,
        private readonly emailConfirmationService: EmailConfirmationService,
        private readonly passwordRecoveryService: PasswordRecoveryService
    ) { }

    @GrpcMethod('AuthService', 'NewPassword')
    public newPassword(request: NewPasswordDto): Promise<Boolean> | Observable<Boolean> | Boolean {
        return this.passwordRecoveryService.newPassword(request)
    }

    @GrpcMethod('AuthService', 'ResetPassword')
    public resetPassword(request: ResetPasswordDto): Promise<Boolean> | Observable<Boolean> | Boolean {
        return this.passwordRecoveryService.resetPassword(request)
    }


    // @Authorization()
    @GrpcMethod('AuthService', 'FindProfile')
    public findProfile(request: FindProfileRequest): Promise<User> | Observable<User> | User {
        return this.authService.findUserById(request.id)
    }

    @GrpcMethod('AuthService', 'FindUserById')
    public findUserById(request: FindUserByIdRequest): Promise<User> | Observable<User> | User {
        return this.authService.findUserById(request.id)
    }

    @GrpcMethod('AuthService', 'UpdateUser')
    public updateUser(request: UpdateUserDto): Promise<User> | Observable<User> | User {
        return this.authService.updateUser(request.userId, { username: request.username, email: request.email, isTwoFactorEnabled: request.isTwoFactorEnabled.bool })
    }

    @UseGuards(ProviderGuard)
    @GrpcMethod('AuthService', 'Oauthcallback')
    public async oauthcallback(request: OAuthCallBackRequest): Promise<User> {
        if (!request.code) {
            throw new RpcException('Не был предоставлен код авторизации')
        }
        const user = await this.authService.extractProfileFromCode(request.provider, request.code)
        return user
    }

    @GrpcMethod('AuthService', 'NewVerification')
    public async newVerification(request: NewVerificationRequest): Promise<User> {
        return await this.emailConfirmationService.newVerification(request)
    }

    @GrpcMethod('AuthService', 'Register')
    public async register(request: RegisterDto): Promise<User> {
        return this.authService.register(request)
    }

    @UseGuards(ProviderGuard)
    @GrpcMethod('AuthService', 'Oauthconnect')
    public async oauthconnect(request: OAuthConnectRequest): Promise<OAuthConnectResponse> {
        const providerInstance = this.providerService.findByService(request.provider)
        return {
            url: providerInstance.getAuthUrl(),
        }
    }

    @GrpcMethod('AuthService', 'Login')
    public async login(request: LoginDto): Promise<User> {
        return this.authService.login(request)
    }
}
