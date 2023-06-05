import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ConstantService } from '../config/constant.service';
import { ExtractJwt, Strategy } from 'passport-jwt';


@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService:JwtService ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.getUser(email);
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (user && isPasswordMatch) {
      return user;
    }
    return new UnauthorizedException();
  }

  async login(email) {
    const user = await this.userService.getUser(email);
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
