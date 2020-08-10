import { IsString} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import * as  rpc  from '../../../codegen/rpc';

export class SignInResponseDto implements rpc.app.ISignInResponse{
  @ApiModelProperty()
  @IsString()
  readonly token: string;

  @ApiModelProperty()
  @IsString()
  readonly refreshToken: string;
}
