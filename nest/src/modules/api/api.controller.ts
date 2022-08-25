import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JuejinService } from './juejin.service';
import { QueryBannerListDto } from './dto/api.dto';

@ApiTags('外部接口管理模块')
@Controller('api')
export class ApiController {
  constructor(private readonly juejinService: JuejinService) {}

  @Get('juejin/bannerList')
  @ApiOperation({ summary: '获取掘金海报图列表' })
  getJuejinBannerList(@Query() query: QueryBannerListDto) {
    return this.juejinService.getJuejinBannerList(query);
  }
}
