import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { QueryUserDto, CreateUserDto, UpdateUserDto } from './dto/user.dto';

@ApiTags('用户管理模块')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @ApiOperation({ summary: '注册用户' })
  register(@Body() user: CreateUserDto) {
    return this.userService.register(user);
  }

  @Get('list')
  @ApiOperation({ summary: '获取用户列表' })
  getUserList(@Query() query: QueryUserDto) {
    return this.userService.getUserList(query);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取用户详情' })
  getUserInfo(@Param('id') id: string) {
    return this.userService.getUserInfo(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新用户信息' })
  updateUserInfo(@Param('id') id: string, @Body() userInfo: UpdateUserDto) {
    return this.userService.updateUserInfo(id, userInfo);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除用户' })
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
