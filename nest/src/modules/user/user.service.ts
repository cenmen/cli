import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { QueryUserDto, CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(createUser: CreateUserDto) {
    const { username } = createUser;

    const user = await this.userRepository.findOne({
      where: { username },
    });
    if (user) {
      throw new HttpException('用户名已存在', HttpStatus.BAD_REQUEST);
    }

    const newUser = await this.userRepository.create(createUser);
    return await this.userRepository.save(newUser);
  }

  async getUserList(query: QueryUserDto) {
    const { page = 1, pageSize = 10, username, ...rest } = query;
    const offset = (page - 1) * pageSize;
    const users = await this.userRepository.find({
      where: {
        username: Like(`%${username || '_'}%`),
        ...rest,
      },
      order: {
        updateTime: 'DESC',
      },
      skip: offset,
      take: pageSize,
      cache: true,
    });
    return users;
  }

  async getUserInfo(id: string) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new HttpException('用户不存在', HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  async updateUserInfo(id: string, userInfo: UpdateUserDto) {
    let record = await this.userRepository.findOne(id);
    record = { ...record, ...userInfo, updateTime: Date.now() };
    await this.userRepository.save(record);
  }

  async deleteUser(id: string) {
    const record = await this.userRepository.findOne(id);
    return await this.userRepository.remove(record);
  }
}
