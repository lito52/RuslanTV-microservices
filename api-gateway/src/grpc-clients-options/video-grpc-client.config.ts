import { ClientProviderOptions, Transport } from "@nestjs/microservices";
import { join } from "path";
import * as dotenv from 'dotenv'
import { VIDEO_SERVICE_NAME, VIDEO_SERVICE_PACKAGE_NAME } from "src/interfaces/video_service";
dotenv.config()

export const videoServiceGrpcClientOptions: ClientProviderOptions = {
    name: VIDEO_SERVICE_NAME,
    transport: Transport.GRPC,
    options: {
        package: VIDEO_SERVICE_PACKAGE_NAME,
        url: process.env.VIDEO_SERVICE_URL || '0.0.0.0:50053',
        protoPath: join(__dirname, '../../src/proto/video_service.proto'),
    }
}