import { ClientProviderOptions, Transport } from "@nestjs/microservices";
import { dirname, join } from "path";
import * as dotenv from 'dotenv'
import { POST_SERVICE_NAME, POST_SERVICE_PACKAGE_NAME } from "src/interfaces/post_service";

dotenv.config()

export const postServiceGrpcClientOptions: ClientProviderOptions = {
    name: POST_SERVICE_NAME,
    transport: Transport.GRPC,
    options: {
        package: POST_SERVICE_PACKAGE_NAME,
        url: process.env.CHANNEL_SERVICE_URL || '0.0.0.0:50051',
        protoPath: join(__dirname, '../../../src/_proto/post_service.proto'),
    }
}
