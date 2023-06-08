import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ConstantService } from '../config/constant.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Role } from '../config/auth/guards/guard.decorators';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.getUser(email);
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (user && isPasswordMatch) {
      return user;
    }
    return new UnauthorizedException();
  }

  public async login(email) {
    const user = await this.userService.getUser(email);
    const token = await this.createAccessToken(user);
    await this.userService.updateUser(user.id, { access_token: token });
    return { token };
  }

  public async register(data) {
    data.role = Role.User;
    const user = await this.userService.createUser(data);
    if(user?.email){
      await this.login(user.email)
    }
    return user;
  }

  private async createAccessToken (user){
    const payload = { sub: user.id, email: user.email, role: user.role };
    return await this.jwtService.signAsync(payload);
  }
}
