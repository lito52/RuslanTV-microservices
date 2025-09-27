import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../../auth/decorators/roles.decorator';
import { UserRole } from '../../auth/types/types';

@Injectable()
export class RolesGuard implements CanActivate {
    public constructor(private readonly reflector: Reflector) { }

    public async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const roles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ])
        const request = context.switchToHttp().getRequest();

        if (!roles) return true

        if (!roles.includes(request.session.role)) {
            throw new ForbiddenException({ message: 'Недостаточно прав. У вас нет прав доступа к этому ресурсу' })
        }

        return true
    }
}
