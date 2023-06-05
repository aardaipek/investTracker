import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConstantService } from '../../constant.service';
import { Request } from 'express';
import { Role } from '../guard.decorators';
import { Reflector } from '@nestjs/core';


@Injectable()
export class AuthGuard implements CanActivate {
  jwtService: JwtService = new JwtService();
  
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [context.getHandler(),context.getClass()]);
    if (isPublic) {
      return true;
    }

    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: new ConstantService().getConstants().jwtSecret,
      });
      request['user'] = payload;

      const roles = this.reflector.get<Role[]>('roles', context.getHandler());
      if (roles) {
        const abc = roles.some((role) => request.user?.roles?.includes(role));
        if(!abc){
          throw new UnauthorizedException();
        }
      }
    } catch(err) {
      console.log(err)
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
