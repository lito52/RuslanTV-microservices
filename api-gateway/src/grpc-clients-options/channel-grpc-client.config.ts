import { ClientProviderOptions, Transport } from "@nestjs/microservices";
import { join } from "path";
import * as dotenv from 'dotenv'
import { CHANNEL_SERVICE_NAME, CHANNEL_SERVICE_PACKAGE_NAME } from "src/interfaces/channel_service";

dotenv.config()

export const channelServiceGrpcClientOptions: ClientProviderOptions = {
    name: CHANNEL_SERVICE_NAME,
    transport: Transport.GRPC,
    options: {
        package: CHANNEL_SERVICE_PACKAGE_NAME,
        url: process.env.CHANNEL_SERVICE_URL || '0.0.0.0:50052',
        protoPath: join(__dirname, '../../src/proto/channel_service.proto'),
    }
}