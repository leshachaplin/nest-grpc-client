import {
  IsString,
  IsNotEmpty,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class ChangePasswordDto {
  @ApiModelProperty()
  @IsString()
  readonly login: string;

  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  readonly token: string;

  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  readonly newPassword: string;
}
