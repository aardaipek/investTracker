import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../core/dto/create.user';
import { Logger } from '../config/logger';
import { AuthGuard } from '../config/auth/guards/auth.guard';
import { Role, Roles } from '../config/auth/guards/guard.decorators';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService,private logger:Logger) {
    this.logger.setContext(UserController.name);
  }

  @Post('create')
  @Roles(Role.User)
  public async CreateUser(@Body() data: CreateUserDto) {
    try {
      return await this.userService.createUser(data);
    } catch (err) {
      this.logger.error(err);
      return err;
    }
  }

  @Post('getUser')
  @Roles(Role.User)
  public async GetUser(@Body() data) {
    try {
      return await this.userService.getUser(data.email);
    } catch (err) {
      this.logger.error(err);
      return err;
    }
  }
}
