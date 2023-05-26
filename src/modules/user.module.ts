import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../core/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
