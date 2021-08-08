import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

class Cart {
  productId: string;
  depthId: string;
  sizeId: string;
  cost: number;
  count: number;
  total: number;
}

export interface OrderModel extends Base {}
export class OrderModel extends TimeStamps {
  @prop()
  userId: string;

  @prop({ type: () => [Cart], _id: false })
  cart: Cart[];
}
