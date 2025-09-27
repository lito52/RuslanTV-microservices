import { MailerOptions } from "@nestjs-modules/mailer";
import { ConfigService } from "@nestjs/config";
import { isDev } from "src/libs/common/utils/is-dev.util";

export const getMailerConfig = async (
    configService: ConfigService
): Promise<MailerOptions> => ({
    transport: {
        hostname: configService.getOrThrow<string>('MAIL_HOST'),
        port: configService.getOrThrow<number>('MAIL_PORT'),
        secure: !isDev(configService),
    },
    defaults: {
        from: `"RuslanTV Corporation" leonefremov34@gmail.com`
    }
})