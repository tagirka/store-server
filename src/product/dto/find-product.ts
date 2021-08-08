import { IsNumber } from 'class-validator';

export class FindProductDto {
  @IsNumber()
  category: string;
}
