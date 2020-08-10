import * as Joi from '@hapi/joi';

import { Config } from '../types/config';

const schema = Joi.object({
  DB_HOST: Joi.string(),
  DB_PORT: Joi.number().integer(),
  DB_NAME: Joi.string(),
  DB_USER: Joi.string(),
  DB_PASSWORD: Joi.string(),
  SECRET_KEY: Joi.string(),
  SECRET_KEY_REFRESH: Joi.string(),
});

export class ConfigValidator<T = any> {
  public validate(value: T): Config {
    const config = Joi.attempt(value, schema, {
      abortEarly: false,
      convert: true,
      stripUnknown: true,
    }) as Config;

    return config;
  }
}
