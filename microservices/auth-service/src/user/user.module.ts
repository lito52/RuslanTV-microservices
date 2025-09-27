import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'USER_PACKAGE',
    //     transport: Transport.GRPC,
    //     options: {
    //       url: 'localhost:50051',
    //       package: 'user_service',
    //       protoPath: join(__dirname, '../../src/proto/user.proto'),
    //     }
    //   }
    // ])
    // GrpcClientModule
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule { }
