import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { IsNumber, IsString } from 'class-validator';
import { prop } from '@typegoose/typegoose';

export interface SizeModel extends Base {}
export class SizeModel extends TimeStamps {
  @IsString()
  @prop()
  title: string;

  @IsNumber()
  @prop()
  ratioCost: number;
}
