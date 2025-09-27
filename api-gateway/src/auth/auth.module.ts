import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule } from '@nestjs/microservices';
import * as dotenv from 'dotenv'
import { authServiceGrpcClientOptions } from '../grpc-clients-options/auth-grpc-client.config';
import { AuthServiceGrpcClient } from '../grpc-services/auth-service-client.service';
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getRecaptchaConfig } from '../configs/recaptcha.config';

dotenv.config()

@Module({
  imports: [
    ClientsModule.register([authServiceGrpcClientOptions]),
    GoogleRecaptchaModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getRecaptchaConfig,
      inject: [ConfigService]
    }),
  ],
  providers: [AuthService, AuthServiceGrpcClient],
  controllers: [AuthController],
})
export class AuthModule { }
