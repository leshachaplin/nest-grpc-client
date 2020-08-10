import { IsString} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import * as  rpc  from '../../../codegen/rpc';

export class RefreshResponseDto implements rpc.app.IRefreshTokenResponse{
  @ApiModelProperty()
  @IsString()
  readonly token: string;

  @ApiModelProperty()
  @IsString()
  readonly refreshToken: string;
}