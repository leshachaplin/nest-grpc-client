import { IsString} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class SignUpDto {
  @ApiModelProperty()
  @IsString()
  readonly login: string;

  @ApiModelProperty()
  @IsString()
  readonly password: string;
}
