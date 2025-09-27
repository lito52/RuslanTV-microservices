import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Authorized = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest()

        return request.session.userId ? request.session.userId : null
    }
)