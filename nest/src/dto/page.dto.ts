import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsInt, Min, Max } from 'class-validator';

export class BasePageQuery {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  @ApiPropertyOptional({ description: '页数', default: 1 })
  page: number;

  @IsOptional()
  @IsInt()
  @Min(10)
  @Max(200)
  @Type(() => Number)
  @ApiPropertyOptional({ description: '条数', default: 10 })
  pageSize: number;
}
