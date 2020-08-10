import { Body, Controller, Delete, Get, Logger, OnModuleInit, Post, Res, UseGuards } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';
import * as rpc from '../codegen/rpc';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { SignUpDto } from './auth/dto/signUp.dto';
import { SignInDto } from './auth/dto/signIn.dto';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { DeleteDto } from './auth/dto/delete.dto';
import { ConfirmDto } from './auth/dto/confirm.dto';
import { RefreshDto } from './auth/dto/refresh.dto';
import { ForgotPasswordDto } from './auth/dto/forgot-password.dto';
import { ChangePasswordDto } from './auth/dto/reset-password.dto copy';
import { SignInResponseDto } from './auth/dto/signIn-response.dto';
import { RefreshResponseDto } from './auth/dto/refresh-response.dto';

@ApiTags('Authentication')
@Controller('user')
export class AuthControllers implements OnModuleInit{
  private logger = new Logger('AuthControllers');

  @Client(microserviceOptions)
  private authClient: ClientGrpc;

  private grpcService: rpc.app.AuthService;

  onModuleInit(): any {
    this.grpcService = this.authClient.getService<rpc.app.AuthService>('AuthService');
  }

  @ApiBody({ type: SignUpDto })
  @Post('signUp')
  SignUp(@Body() signUpRequest: rpc.app.ISignUpRequest):Promise<rpc.app.EmptyResponse> {
    this.logger.log(`Adding ${signUpRequest.login}  ${signUpRequest.password}`);
    const emptyResponse = this.grpcService.signUp({login:signUpRequest.login, password:signUpRequest.password});
    return  emptyResponse;
  }

  @ApiBody({ type: SignInDto })
  @Post('signIn')
  async SignIn(@Body() signInRequest: rpc.app.SignInRequest): Promise<SignInResponseDto> {
    this.logger.log(signInRequest);

    return await this.grpcService.signIn(signInRequest);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiBody({ type: DeleteDto })
  @Delete('delete')
  async Delete(@Body() deleteReq: rpc.app.IDeleteRequest):Promise<rpc.app.EmptyResponse> {
    return await this.grpcService.delete(deleteReq);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiBody({ type: ConfirmDto })
  @Post('confirm')
  async Confirm(@Body() confirmReq:rpc.app.IConfirmRequest):Promise<rpc.app.EmptyResponse> {
    return await this.grpcService.confirm(confirmReq);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiBody({ type: RefreshDto })
  @Post('refresh')
  async RefreshToken(@Body() refreshReq:rpc.app.IRefreshTokenRequest):Promise<RefreshResponseDto> {
    this.logger.log(refreshReq);
    return  await this.grpcService.refreshToken(refreshReq);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiBody({ type: ForgotPasswordDto })
  @Post('forgotPassword')
  async ForgotPassword(@Body() forgotReq: rpc.app.IForgotPasswordRequest):Promise<rpc.app.EmptyResponse> {
    return await this.grpcService.forgotPassword(forgotReq);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiBody({ type: ChangePasswordDto })
  @Post('restorePassword')
  async RestorePassword(@Body() restoreReq: rpc.app.IRestoreRequest):Promise<rpc.app.EmptyResponse> {
    return await this.grpcService.restore(restoreReq);
  }
}
