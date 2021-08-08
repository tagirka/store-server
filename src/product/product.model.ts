import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';

export interface ProductModel extends Base {}

export class ProductModel extends TimeStamps {
  @prop()
  title: string;

  @prop()
  image: string;

  @prop()
  cost: number;

  @prop()
  categoryId: Types.ObjectId;

  @prop()
  availableDepths: [Types.ObjectId];

  @prop()
  availableSizes: [Types.ObjectId];
}
