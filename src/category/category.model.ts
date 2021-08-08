import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';
import { IsString } from 'class-validator';
export interface CategoryModel extends Base {}
export class CategoryModel extends TimeStamps {
  @IsString()
  @prop()
  title: string;
}
