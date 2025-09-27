import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { ProviderService } from '../provider/provider.service';

@Injectable()
export class ProviderGuard implements CanActivate {
    public constructor(private readonly providerService: ProviderService) { }

    public async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const data = context.switchToRpc().getData()

        const provider = data.provider

        const providerInstance = this.providerService.findByService(provider)

        if (!providerInstance) {
            throw new RpcException({
                message: `Провайдер "${provider}" не найден. Пожалуйста, проверьте правильность данных`
            })
        }

        return true
    }
}
