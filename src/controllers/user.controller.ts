import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../core/dto/create.user';
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  public async CreateUser(@Body() data: CreateUserDto) {
    try {
      return await this.userService.createUser(data);
    } catch (err) {
      return err;
    }
  }
}
