import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create.user';
import { IUser } from '../interfaces/user.interface';
import { UpdateUserDto } from '../dto/update.user';

@Injectable()
export class UserRepository {
  constructor(@InjectModel('user') private userModel: Model<IUser>) {}

  public async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    const newUser = await new this.userModel(createUserDto);
    return newUser.save();
  }

  public async getUser(email: string): Promise<IUser> {
    const existingUser = await this.userModel.findOne({email:email}).exec();
    if (!existingUser) {
      throw new NotFoundException(`User #${email} not found`);
    }
    return existingUser;
  }

  public async updateUser(userId: string, updateUserDto:UpdateUserDto){
    const existingUser = await this.userModel.findByIdAndUpdate(
      userId,
      updateUserDto,
      { new: true },
    );
    if (!existingUser) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return existingUser;
  }
}
