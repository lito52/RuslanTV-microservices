import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "./auth.controller"
import { AuthService } from "./auth.service";
import { v4 as uuidv4 } from 'uuid'
import { FindProfileRequest, FindUserByIdRequest, LoginDto, NewPasswordDto, NewVerificationRequest, OAuthCallBackRequest, OAuthConnectRequest, RegisterDto, ResetPasswordDto, UpdateUserDto } from "./interface/auth_service";
import { RpcException } from "@nestjs/microservices";
import { UserService } from "../user/user.service";
import { ConfigService } from "@nestjs/config";
import { MailService } from "../libs/mail/mail.service";
import { ProviderService } from "./provider/provider.service";
import { TwoFactorAuthService } from "./two-factor-auth/two-factor-auth.service";
import { EmailConfirmationService } from "./email-confirmation/email-confirmation.service";
import { PasswordRecoveryService } from "./password-recovery/password-recovery.service";

const newPasswordDto: NewPasswordDto = {
    password: '12345678',
    token: uuidv4()
}

const resetPasswordDto: ResetPasswordDto = {
    email: 'ruslan@mail.ru'
}

const newVerificationRequest: NewVerificationRequest = {
    token: uuidv4()
}

const findProfileRequest: FindProfileRequest = {
    id: uuidv4()
}

const findUserByIdRequest: FindUserByIdRequest = {
    id: uuidv4()
}

const updateUserDto: UpdateUserDto = {
    userId: uuidv4(),
    username: 'ruslan',
    email: 'ruslan@mail.ru',
    isTwoFactorEnabled: { bool: false },
}

const oAuthCallBackRequest: OAuthCallBackRequest = {
    provider: 'google',
    code: '123456'
}

const registerDto: RegisterDto = {
    username: 'lito',
    email: 'ruslan@mail.ru',
    password: '12345678',
    passwordRepeat: '12345678',
}

const oAuthConnectRequest: OAuthConnectRequest = {
    provider: 'google'
}

const loginDto: LoginDto = {
    email: 'ruslan@mail.ru',
    password: '12345678',
    code: undefined
}

const user = {
    id: '',
    username: '',
    picture: '',
    email: '',
    password: '',
    role: '',
    isVerified: false,
    isTwoFactorEnabled: false,
    method: '',
}

const oAuthConnectResponse = {
    url: ''
}

describe('AuthController', () => {
    let controller: AuthController;
    let service: AuthService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
            providers: [
                {
                    provide: AuthService,
                    useValue: {
                        newPassword: jest.fn().mockResolvedValue(Boolean),
                        resetPassword: jest.fn().mockResolvedValue(Boolean),
                        newVerification: jest.fn().mockResolvedValue(user),
                        findProfile: jest.fn().mockResolvedValue(user),
                        findUserById: jest.fn().mockResolvedValue(user),
                        updateUser: jest.fn().mockResolvedValue(user),
                        oauthcallback: jest.fn().mockResolvedValue(user),
                        oauthconnect: jest.fn().mockResolvedValue(oAuthConnectResponse),
                        register: jest.fn().mockResolvedValue(user),
                        login: jest.fn().mockResolvedValue(user),
                        extractProfileFromCode: jest.fn().mockResolvedValue(user)
                    },
                },
                {
                    provide: UserService,
                    useValue: {
                        findByEmail: jest.fn().mockResolvedValue(user),
                        findById: jest.fn().mockResolvedValue(user),
                        create: jest.fn().mockResolvedValue(user),
                        update: jest.fn().mockResolvedValue(user),
                        delete: jest.fn().mockResolvedValue(user),
                    }
                },
                {
                    provide: ConfigService,
                    useValue: {
                        get: jest.fn().mockReturnValue('mocked-value'),
                        getOrThrow: jest.fn().mockReturnValue('mocked-value'),
                    },
                },
                {
                    provide: MailService,
                    useValue: {
                        sendConfirmationEmail: jest.fn(),
                        sendPasswordResetEmail: jest.fn(),
                        sendTwoFactorTokenEmail: jest.fn(),
                    },
                },
                {
                    provide: ProviderService,
                    useValue: {
                        getOAuthUrl: jest.fn().mockResolvedValue(oAuthConnectResponse),
                        getOAuthTokens: jest.fn().mockResolvedValue(user),
                        findByService: jest.fn().mockReturnValue({
                            getAuthUrl: jest.fn().mockReturnValue(''),
                        }),
                        getAuthUrl: jest.fn().mockResolvedValue(oAuthConnectResponse),
                    }
                },
                {
                    provide: TwoFactorAuthService,
                    useValue: {
                        sendTwoFactorToken: jest.fn(),
                        verifyTwoFactorToken: jest.fn().mockResolvedValue(true),
                    }
                },
                {
                    provide: EmailConfirmationService,
                    useValue: {
                        sendVerificationToken: jest.fn(),
                        newVerification: jest.fn().mockResolvedValue(user),
                    }
                },
                {
                    provide: PasswordRecoveryService,
                    useValue: {
                        PasswordReset: jest.fn().mockReturnValue(Boolean),
                        resetPassword: jest.fn().mockReturnValue(Boolean),
                        newPassword: jest.fn().mockReturnValue(Boolean),
                    }
                },
            ]
        }).compile()

        controller = module.get<AuthController>(AuthController)
        service = module.get<AuthService>(AuthService)
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    })

    it('should return boolean', async () => {
        const result = await controller.newPassword(newPasswordDto)
        expect(result).toEqual(Boolean)
    })

    it('should return boolean', async () => {
        const result = await controller.resetPassword(resetPasswordDto)
        expect(result).toEqual(Boolean)
    })

    it('should return an user', async () => {
        const result = await controller.newVerification(newVerificationRequest)
        expect(result).toEqual(user)
    })

    it('should return an user', async () => {
        const result = await controller.findProfile(findProfileRequest)
        expect(result).toEqual(user)
    })

    it('should return an user', async () => {
        const result = await controller.findUserById(findUserByIdRequest)
        expect(result).toEqual(user)
    })

    it('should return an user', async () => {
        const result = await controller.updateUser(updateUserDto)
        expect(result).toEqual(user)
    })

    it('should return an user', async () => {
        const result = await controller.oauthcallback(oAuthCallBackRequest)
        expect(result).toEqual(user)
    })

    it('should throw an expection if code not provided', async () => {
        jest.spyOn(service, 'extractProfileFromCode').mockRejectedValueOnce(new RpcException('Не был предоставлен код авторизации'))

        try {
            await controller.oauthcallback(oAuthCallBackRequest)
        } catch (error) {
            expect(error).toBeInstanceOf(RpcException)
            expect(error.message).toBe('Не был предоставлен код авторизации')
        }
    })

    it('should return an url', async () => {
        const result = await controller.oauthconnect(oAuthConnectRequest)
        expect(result).toEqual(oAuthConnectResponse)
    })

    it('should return an user', async () => {
        const result = await controller.register(registerDto)
        expect(result).toEqual(user)
    })

    it('should return an user', async () => {
        const result = await controller.login(loginDto)
        expect(result).toEqual(user)
    })
})