import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC, // IMPORTANT
  options: {
    package: 'app',
    url: 'localhost:50052',
    protoPath: join(__dirname, '../protos/app.proto'),
  },
};

export const microserviceClaimsOptions: ClientOptions = {
  transport: Transport.GRPC, // IMPORTANT
  options: {
    package: 'claims',
    protoPath: join(__dirname, '../protos/claims.proto'),
  },
};