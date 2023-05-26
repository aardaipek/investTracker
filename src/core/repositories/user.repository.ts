import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create.user';
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class UserRepository {
  constructor(@InjectModel('user') private userModel: Model<IUser>) {}

  public async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    const newUser = await new this.userModel(createUserDto);
    return newUser.save();
  }
}
