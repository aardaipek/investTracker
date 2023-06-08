import { Injectable } from '@nestjs/common';
import { UserRepository } from '../core/repositories/user.repository';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async createUser(data) {
    if(data.password){
      const salt = await bcrypt.genSalt();
      data.password = await bcrypt.hash(data.password, salt);
    }
    
    return await this.userRepository.createUser(data);
  }

  public async getUser(email) {
    return await this.userRepository.getUser(email);
  }

  public async updateUser(userId,data) {
    return await this.userRepository.updateUser(userId, data);
  }
}
