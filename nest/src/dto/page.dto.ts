import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class BasePageQuery {
  @IsInt()
  @Min(1)
  @Type(() => Number)
  @ApiPropertyOptional({ description: '页数', default: 1 })
  page = 1;

  @IsInt()
  @Min(10)
  @Max(200)
  @Type(() => Number)
  @ApiPropertyOptional({ description: '条数', default: 10 })
  pageSize: number;
}
