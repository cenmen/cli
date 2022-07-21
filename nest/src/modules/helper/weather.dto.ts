import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsInt, IsEnum, ArrayMaxSize, ArrayNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export enum ValidatorType {
  DAY = 'day',
  WEEK = 'week',
}

export class WeatherByCityDto {
  @ApiProperty({ default: '广东', description: '省份' })
  @IsString()
  readonly province: string;

  @ApiProperty({ default: '广州', description: '城市' })
  @IsString()
  readonly city: string;
}

export class ValidatorDto {
  @ApiPropertyOptional({ default: 'day', description: '枚举类型' })
  @IsOptional()
  @IsEnum(ValidatorType)
  readonly type?: ValidatorType;

  @ApiProperty({ default: 10, description: '数字' })
  @IsInt()
  @Type(() => Number)
  readonly size: number;
}
