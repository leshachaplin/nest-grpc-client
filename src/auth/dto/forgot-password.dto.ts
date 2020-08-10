import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class ForgotPasswordDto {
  @ApiModelProperty()
  @IsString()
  readonly login: string;
}
