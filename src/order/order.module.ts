import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypegooseModule } from 'nestjs-typegoose';

import { OrderModel } from './order.model';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: OrderModel,
        schemaOptions: {
          collection: 'Order',
        },
      },
    ]),
  ],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
