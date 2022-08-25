import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { JuejinService } from './juejin.service';
import { ApiController } from './api.controller';

@Module({
  imports: [HttpModule],
  controllers: [ApiController],
  providers: [JuejinService],
  exports: [JuejinService],
})
export class ApiModule {}
