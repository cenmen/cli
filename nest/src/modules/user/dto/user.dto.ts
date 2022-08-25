import { ApiProperty, ApiPropertyOptional, PartialType, IntersectionType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { BasePageQuery } from 'src/dto/page.dto';

export class CreateUserDto {
  @IsNotEmpty({ message: '请输入用户名' })
  @ApiProperty({ description: '用户名', default: '用户名001' })
  username: string;

  @IsNotEmpty({ message: '请输入密码' })
  @ApiProperty({ description: '密码', default: '123456' })
  password: string;

  @ApiProperty({ description: '角色', default: 'admin' })
  role: string;
}

export class UserInfoDto {
  @IsNotEmpty()
  @ApiProperty({ description: '用户名' })
  username: string;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  @ApiProperty({ description: '年龄' })
  age: number;

  @ApiProperty({ description: '昵称' })
  nickname: string;

  @ApiProperty({ description: '头像' })
  avatar: string;

  @ApiPropertyOptional({ description: '邮箱' })
  email: string;

  @ApiProperty({ description: '角色' })
  role: string;
}

export class UpdateUserDto extends PartialType(UserInfoDto) {}

export class QueryUserDto extends IntersectionType(UpdateUserDto, BasePageQuery) {}
