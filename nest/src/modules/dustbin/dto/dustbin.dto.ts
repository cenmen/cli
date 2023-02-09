import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryNumberDto {
  @ApiProperty({ description: '数字', default: 0 })
  spider: number;
}

export class AuthLoginDto {
  @ApiProperty({ description: '账号', default: 'john' })
  username: string;

  @ApiProperty({ description: '密码', default: 'changeme' })
  password: string;
}
