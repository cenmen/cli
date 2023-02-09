import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { QueryNumberDto, AuthLoginDto } from './dto/dustbin.dto';
import { delay } from '../../utils';

export type User = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class DustbindService {
  private readonly users: User[];

  constructor(private readonly jwtService: JwtService) {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async getDustbinData(params: QueryNumberDto) {
    await delay(1000);
    return params;
  }

  findUser(username: string, password: string) {
    const user = this.users.find((user) => user.username === username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async validateUser(username: string, password: string): Promise<any> {
    return this.findUser(username, password);
  }

  async login(body: AuthLoginDto) {
    const { username, password } = body;
    const user = this.findUser(username, password);
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
