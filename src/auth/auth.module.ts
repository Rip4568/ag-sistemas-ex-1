import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from '../services/jwt.service';
import { HashService } from '../services/hash.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'your-secret-key', //eu deveria colocar no .env tambem, mas realmente não estou com pique
      signOptions: { expiresIn: '1d' }, // tempo de expliração do token varia de projeto pra projeto a depender do nivel de segurança
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtService, HashService],
  exports: [AuthService],
})
export class AuthModule {}
