import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { OrderModel } from './order.model';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(OrderModel) private readonly orderModel: ModelType<OrderModel>,
  ) {}

  async create(@Body() dto: OrderModel) {
    return this.orderModel.create(dto);
  }

  async getAll(): Promise<DocumentType<OrderModel>[]> {
    return this.orderModel.find().exec();
  }
}
