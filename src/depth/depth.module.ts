import { Module } from '@nestjs/common';
import { DepthService } from './depth.service';
import { DepthController } from './depth.controller';
import { TypegooseModule } from 'nestjs-typegoose';

import { DepthModel } from './depth.model';

@Module({
  providers: [DepthService],
  controllers: [DepthController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: DepthModel,
        schemaOptions: {
          collection: 'Depth',
        },
      },
    ]),
  ],
})
export class DepthModule {}
