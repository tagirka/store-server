import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { IsNumber, IsString } from 'class-validator';
import { prop } from '@typegoose/typegoose';

export interface DepthModel extends Base {}
export class DepthModel extends TimeStamps {
  @IsString()
  @prop()
  title: string;

  @IsNumber()
  @prop()
  ratioCost: number;
}
