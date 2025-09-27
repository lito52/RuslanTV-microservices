import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { authServiceGrpcClientOptions } from '../grpc-client-options/auth-grpc-client.config';
import { AuthServiceGrpcClientService } from '../grpc-services/auth-service-grpc-client.service';
@Module({
    imports: [
        ClientsModule.register([authServiceGrpcClientOptions])
    ],
    providers: [AuthServiceGrpcClientService],
    exports: [AuthServiceGrpcClientService]
})
export class GrpcClientModule { }