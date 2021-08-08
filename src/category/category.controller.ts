import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryModel } from './category.model';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @HttpCode(200)
  @Post('create')
  async create(@Body() dto: CategoryModel) {
    return this.categoryService.create(dto);
  }

  @Get()
  async getAll() {
    return this.categoryService.getAll();
  }
}
