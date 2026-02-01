import { Module } from '@nestjs/common';
import { RmqModule } from './libs/rmq/rmq.module';
import { ConfigModule } from '@nestjs/config';
import { IS_DEV_ENV } from './libs/utils/is-dev.util';

@Module({
    imports: [
        RmqModule,
        ConfigModule.forRoot({
            isGlobal: true,
            ignoreEnvFile: !IS_DEV_ENV
        }),
    ],
    providers: [],
})
export class AppModule { }
