import { Module, CacheModule } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { DustbindService } from './dustbin.service';
import { DustbinController } from './dustbin.controller';
import { JwtStrategy } from '../../core/strategies/jwt.strategy';
import { LocalStrategy } from '../../core/strategies/local.strategy';
import { jwtConstants } from '../../constants';

@Module({
  imports: [
    CacheModule.register({ ttl: 60 }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    PassportModule,
    HttpModule,
  ],
  controllers: [DustbinController],
  providers: [DustbindService, LocalStrategy, JwtStrategy],
  exports: [DustbindService],
})
export class DustbinModule {}
