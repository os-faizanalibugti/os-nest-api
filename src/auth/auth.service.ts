import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  users = [
    {
      id: 1,
      username: 'test',
      email: 'test@oneschool.co',
      first_name: 'Emily',
      last_name: 'John',
      password: '123',
      is_teacher: true,
    },
  ];

  constructor(private jwt: JwtService) {}

  signin(dto: any) {
    if (
      this.users.find((user) => user.username === dto.username) &&
      this.users.find((user) => user.password === dto.password)
    ) {
      const user = this.users.find((user) => user.username === dto.username);
      console.log('Continue...');
      return this.signToken(user.id, user.username);
    } else {
      throw new ForbiddenException('Username or password not correct');
    }
  }

  async signToken(userId: number, username: string) {
    const payload = {
      ...this.users.find((user) => user.username === username),
    };

    const secret = 'oneschool';

    const token = this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return { access: await token, payload };
  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
