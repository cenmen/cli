import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
import envConfig from './config/env';
import { ApiModule } from './modules/api/api.module';
import { FileModule } from './modules/file/file.module';
import { UserModule } from './modules/user/user.module';
import { DustbinModule } from './modules/dustbin/dustbin.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [envConfig] }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'sqlite',
          database: configService.get('database.name'),
          timezone: '+08:00',
          synchronize: true,
          autoLoadEntities: true,
        };
      },
    }),
    ApiModule,
    FileModule,
    UserModule,
    DustbinModule,
  ],
})
export class AppModule {}
