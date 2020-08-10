import { Module } from '@nestjs/common';
import { AuthControllers } from './app.controller';
import { ConfigModule } from './config/config.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/strategies/jwt';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    ConfigModule],
  controllers: [AuthControllers],
  providers: [JwtStrategy],
})
export class AppModule {}
