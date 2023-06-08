import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { UserModule } from './user.module';
import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';
import { ConstantService } from '../config/constant.service';
import { ConfigService } from '@nestjs/config';
import { AuthController } from '../controllers/auth.controller';
import { LoggerModule } from './logger.module';
import { AuthGuard } from '../config/auth/guards/auth.guard';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        global: true,
        secret: new ConstantService().getConstants().jwtSecret,
        signOptions: { expiresIn: new ConstantService().getConstants().jwtExpireIn },
      }),
    }),
    LoggerModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthGuard,
  ],
  exports: [AuthService, LoggerModule],
})
export class AuthModule {}
