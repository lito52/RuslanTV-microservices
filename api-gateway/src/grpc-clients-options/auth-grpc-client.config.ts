import { AUTH_SERVICE_NAME, USER_SERVICE_PACKAGE_NAME } from "../interfaces/auth_service";
import { ClientProviderOptions, Transport } from "@nestjs/microservices";
import { join } from "path";
import * as dotenv from 'dotenv'

dotenv.config()

export const authServiceGrpcClientOptions: ClientProviderOptions = {
    name: AUTH_SERVICE_NAME,
    transport: Transport.GRPC,
    options: {
        package: USER_SERVICE_PACKAGE_NAME,
        url: process.env.AUTH_SERVICE_URL || '0.0.0.0:50051',
        protoPath: join(__dirname, '../../src/proto/auth_service.proto'),
    }
}