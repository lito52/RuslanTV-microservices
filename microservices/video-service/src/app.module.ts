import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IS_DEV_ENV } from './libs/utils/is-dev.util';
import { PrismaModule } from './prisma/prisma.module';
import { VideoModule } from './video/video.module';
import { PlaylistModule } from './playlist/playlist.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: !IS_DEV_ENV
    }),
    PrismaModule,
    VideoModule,
    PlaylistModule
  ],
  providers: [],
})
export class AppModule { }
