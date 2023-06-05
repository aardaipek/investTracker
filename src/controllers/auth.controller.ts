import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Logger } from '../config/logger';
import { AuthService } from '../services/auth.service';
import { Public } from '../config/auth/guards/guard.decorators';

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
}
