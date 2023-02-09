import { Controller, Get, Query, UseInterceptors, CacheInterceptor, Body, Post, UseGuards, Request } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { PostCacheInterceptor } from '../../core/interceptor/cache.interceptor';
import { JwtAuthGuard } from '../../core/guards/jwtAuth.guard';
import { LocalAuthGuard } from '../../core/guards/localAuth.guard';
import { DustbindService } from './dustbin.service';
import { QueryNumberDto, AuthLoginDto } from './dto/dustbin.dto';

@ApiTags('测试模块')
@ApiBearerAuth()
@Controller('dustbin')
export class DustbinController {
  constructor(private readonly dustbindService: DustbindService) {}

  @Get('cache/get')
  @UseInterceptors(CacheInterceptor)
  @ApiOperation({ summary: '测试 get 缓存数据' })
  async getDustbinData(@Query() query: QueryNumberDto) {
    const data = await this.dustbindService.getDustbinData(query);
    return data;
  }

  @Post('cache/post')
  @UseInterceptors(PostCacheInterceptor)
  @ApiOperation({ summary: '测试 post 缓存数据' })
  async fetchDustbinData(@Body() body: QueryNumberDto) {
    const data = await this.dustbindService.getDustbinData(body);
    return data;
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() body: AuthLoginDto) {
    console.log('🚀 -> login -> body', body);
    return this.dustbindService.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
