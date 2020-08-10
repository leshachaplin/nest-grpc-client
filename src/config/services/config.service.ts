import { Injectable } from '@nestjs/common';

import { Config } from '../types/config';

import { ConfigDetector } from './config.detector';

@Injectable()
export class ConfigService {
  private readonly config: Config;

  constructor(private readonly configDetector: ConfigDetector) {
    this.config = this.configDetector.getConfig();
  }

  get SECRET_KEY(): string {
    return this.config.SECRET_KEY;
  }

  get SECRET_KEY_REFRESH(): string {
    return this.config.SECRET_KEY_REFRESH;
  }
}
