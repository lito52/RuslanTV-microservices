import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProviderModule } from './provider/provider.module';
import { getProvidersConfig } from 'src/config/providers.config';
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';
import { PasswordRecoveryModule } from './password-recovery/password-recovery.module';
import { TwoFactorAuthService } from './two-factor-auth/two-factor-auth.service';
import { MailService } from 'src/libs/mail/mail.service';
import { CustomLogger } from 'src/libs/common/logging/logger.service';

@Module({
    imports: [
        PasswordRecoveryModule,
        ProviderModule.registerAsync({
            imports: [ConfigModule],
            useFactory: getProvidersConfig,
            inject: [ConfigService]
        }),
        forwardRef(() => EmailConfirmationModule),
    ],
    controllers: [AuthController],
    providers: [AuthService, UserService, MailService, TwoFactorAuthService, CustomLogger],
    exports: [AuthService]
})
export class AuthModule { }
