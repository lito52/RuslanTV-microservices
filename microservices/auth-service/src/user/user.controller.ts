import { UserService } from './user.service';
import { GrpcMethod, GrpcService } from '@nestjs/microservices';

@GrpcService()
export class UserController {
  constructor(private readonly userService: UserService) { }

  // @GrpcMethod()
  // getHello(request: Empty): Promise<getHello1> {
  //   throw new Error('Method not implemented.');
  // }

  // @GrpcMethod('UserService', 'updateUser')
  // async updateUser(dto: UpdateUserRequest): Promise<User> {
  //   return await this.userService.updateUser(dto)
  // }
}
