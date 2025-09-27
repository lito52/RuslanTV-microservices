import { AuthServiceClient, AUTH_SERVICE_NAME, RegisterDto, User, LoginDto, FindProfileRequest, FindUserByIdRequest, OAuthConnectRequest, OAuthCallBackRequest, OAuthConnectResponse, NewVerificationRequest, Boolean, NewPasswordDto, ResetPasswordDto, UpdateUserDto } from "../interfaces/auth_service";
import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Observable } from "rxjs";

@Injectable()
export class AuthServiceGrpcClient implements AuthServiceClient, OnModuleInit {
    private authServiceClient: AuthServiceClient

    constructor(@Inject(AUTH_SERVICE_NAME) private readonly client: ClientGrpc) { }

    public onModuleInit(): void {
        this.authServiceClient = this.client.getService<AuthServiceClient>(AUTH_SERVICE_NAME)
    }

    register(request: RegisterDto): Observable<User> {
        return this.authServiceClient.register(request)
    }

    login(request: LoginDto): Observable<User> {
        return this.authServiceClient.login(request)
    }

    findProfile(request: FindProfileRequest): Observable<User> {
        return this.authServiceClient.findProfile(request)
    }

    findUserById(request: FindUserByIdRequest): Observable<User> {
        return this.authServiceClient.findUserById(request)
    }

    oauthconnect(request: OAuthConnectRequest): Observable<OAuthConnectResponse> {
        return this.authServiceClient.oauthconnect(request)
    }

    oauthcallback(request: OAuthCallBackRequest): Observable<User> {
        return this.authServiceClient.oauthcallback(request)
    }

    newVerification(request: NewVerificationRequest): Observable<User> {
        return this.authServiceClient.newVerification(request)
    }

    newPassword(request: NewPasswordDto): Observable<Boolean> {
        return this.authServiceClient.newPassword(request)
    }

    resetPassword(request: ResetPasswordDto): Observable<Boolean> {
        return this.authServiceClient.resetPassword(request)
    }

    updateUser(request: UpdateUserDto): Observable<User> {
        return this.authServiceClient.updateUser(request)
    }
}