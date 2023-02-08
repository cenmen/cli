import { Controller, Get, Query, UseInterceptors, CacheInterceptor, Body, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostCacheInterceptor } from '../../core/interceptor/cache2.interceptor';
import { JuejinService } from './juejin.service';
import { QueryBannerListDto } from './dto/api.dto';

@ApiTags('外部接口管理模块')
@Controller('api')
export class ApiController {
  constructor(private readonly juejinService: JuejinService) {}

  @Get('juejin/bannerList')
  @UseInterceptors(CacheInterceptor)
  @ApiOperation({ summary: '获取掘金海报图列表' })
  async getJuejinBannerList(@Query() query: QueryBannerListDto) {
    const data = await this.juejinService.getJuejinBannerList(query);
    return data;
  }

  @Post('juejin/bannerList/post')
  @UseInterceptors(PostCacheInterceptor)
  @ApiOperation({ summary: '测试 post 缓存数据' })
  async fetchJuejinBannerList(@Body() body: QueryBannerListDto) {
    const data = 'data123';
    return data;
  }
}
