import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @HttpCode(200)
  @Post('create')
  async create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get()
  async getAll() {
    return this.productService.getProducts();
  }

  @Get('byCategory/:categoryId')
  async getByCategory(@Param('categoryId') categoryId: string) {
    return this.productService.findByCategory(categoryId);
  }

  @Get(':id')
  async getProductBId(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Delete(':id')
  async delete(
    @Param('id')
    id: string,
  ) {
    const deleted = await this.productService.delete(id);
    if (!deleted) throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
  }

  @Post('find')
  async find(@Body() dto: FindProductDto) {
    return this.productService.findWithCategory(dto);
  }
}
