import { Injectable } from '@nestjs/common';
import { UserRepository } from '../core/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async createUser(data) {
    return await this.userRepository.createUser(data);
  }

  public async getUser(email) {
    return await this.userRepository.getUser(email);
  }
}
