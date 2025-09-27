import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { IS_DEV_ENV, isDev } from './libs/common/utils/is-dev.util';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { ProviderModule } from './auth/provider/provider.module';
import { EmailConfirmationModule } from './auth/email-confirmation/email-confirmation.module';
import { MailModule } from './libs/mail/mail.module';
import { PasswordRecoveryModule } from './auth/password-recovery/password-recovery.module';
import { TwoFactorAuthModule } from './auth/two-factor-auth/two-factor-auth.module';
import { MetricsService } from './libs/common/metrics.service';
import { GrpcMetricsInterceptor } from './libs/common/metrics.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: !IS_DEV_ENV
    }),
    PrometheusModule.register({
      defaultLabels: {
        service: 'auth-service',
        env: process.env.NODE_ENV
      },
      pushgateway: {
        url: isDev ? 'http://localhost:9091' : 'http://pushgateway:9091'
      }
    }),
    UserModule,
    PrismaModule,
    AuthModule,
    ProviderModule,
    MailModule,
    EmailConfirmationModule,
    PasswordRecoveryModule,
    TwoFactorAuthModule,
  ],
  providers: [
    MetricsService,
    GrpcMetricsInterceptor
  ],
  exports: [
    MetricsService,
    GrpcMetricsInterceptor
  ]
})
export class AppModule { }
