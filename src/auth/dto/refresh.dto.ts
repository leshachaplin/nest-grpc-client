import { IsString} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class RefreshDto {
  @ApiModelProperty()
  @IsString()
  readonly token: string;

  @ApiModelProperty()
  @IsString()
  readonly tokenRefresh: string;
}