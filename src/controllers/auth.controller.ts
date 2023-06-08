import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Logger } from '../config/logger';
import { AuthService } from '../services/auth.service';
import { Public } from '../config/auth/guards/guard.decorators';
import { CreateUserDto } from '../core/dto/create.user';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private logger: Logger) {
    this.logger.setContext(AuthController.name);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  public async Login(@Body() data) {
    try {
      await this.authService.validateUser(data.email, data.password);
      return this.authService.login(data.email);
    } catch (err) {
      this.logger.error(err);
      return err;
    }
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('register')
  public async Register(@Body() data: CreateUserDto) {
    try {
      return await this.authService.register(data);
    } catch (err) {
      this.logger.error(err);
      return err;
    }
  }
}
