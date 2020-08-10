import { IsString} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class ConfirmDto {
  @ApiModelProperty()
  @IsString()
  readonly login: string;

  @ApiModelProperty()
  @IsString()
  readonly uuidConfirm: string;
}