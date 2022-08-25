import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryBannerListDto {
  @Type(() => Number)
  @IsNotEmpty({ message: '请输入场次 id' })
  @ApiProperty({ description: '场次 id', default: 2608 })
  aid: number;

  @IsNotEmpty({ message: '请输入 uuid' })
  @ApiProperty({ description: 'uuid', default: '7135312019888670247' })
  uuid: string;

  @ApiProperty({ description: '图下标', default: 0 })
  spider: number;
}
