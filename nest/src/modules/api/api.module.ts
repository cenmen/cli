import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { JuejinService } from './juejin.service';
import { ApiController } from './api.controller';

@Module({
  imports: [CacheModule.register({ ttl: 60 }), HttpModule],
  controllers: [ApiController],
  providers: [JuejinService],
  exports: [JuejinService],
})
export class ApiModule {}
