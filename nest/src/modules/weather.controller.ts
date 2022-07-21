import { Controller, Get, Headers, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags, ApiQuery } from '@nestjs/swagger';
import { WeatherService } from './weather.service';
import * as Dto from './helper/weather.dto';

@ApiTags('[weather] - 天气')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @ApiBearerAuth()
  @ApiQuery({ type: Dto.WeatherByCityDto })
  @ApiOperation({ summary: '根据省份城市获取天气预报信息' })
  getWeatherByCity(@Headers() headers, @Query() query): any {
    return this.weatherService.getWeatherByCity(query);
  }

  @Get('exception')
  @ApiOperation({ summary: '测试异常' })
  getException(): any {
    return this.weatherService.getException();
  }

  @Get('validator')
  @ApiQuery({ type: Dto.ValidatorDto })
  @ApiOperation({ summary: '参数校验 & 参数转换' })
  getValidator(@Query() query: Dto.ValidatorDto): any {
    return this.weatherService.getValidator(query);
  }
}
