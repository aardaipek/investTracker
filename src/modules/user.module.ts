import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../core/schemas/user.schema';
import { UserService } from '../services/user.service';
import { UserRepository } from '../core/repositories/user.repository';
import { LoggerModule } from './logger.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
    LoggerModule
  ],
  controllers: [UserController],
  providers: [UserService,UserRepository],
})
export class UserModule {}
