import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {

    public async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const request = context.switchToHttp().getRequest()

        if (typeof request.session.userId === 'undefined') {
            throw new UnauthorizedException({ message: 'Пользователь не авторизован. Пожалуйста, войдите в систему, чтобы получить доступ.' })
        }

        return true
    }
}
