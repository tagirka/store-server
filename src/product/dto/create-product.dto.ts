import { IsArray, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  title: string;

  @IsString()
  image: string;

  @IsNumber()
  @IsPositive()
  cost: number;

  @IsNumber()
  @IsPositive()
  categoryId: string;

  @IsArray()
  @IsString({ each: true })
  availableDepths: string[];

  @IsArray()
  @IsString({ each: true })
  availableSizes: string[];
}
