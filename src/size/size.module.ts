import { Module } from '@nestjs/common';
import { SizeController } from './size.controller';
import { SizeService } from './size.service';
import { TypegooseModule } from 'nestjs-typegoose';

import { SizeModel } from './size.model';

@Module({
  controllers: [SizeController],
  providers: [SizeService],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: SizeModel,
        schemaOptions: {
          collection: 'Size',
        },
      },
    ]),
  ],
})
export class SizeModule {}
