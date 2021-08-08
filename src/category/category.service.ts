import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { CategoryModel } from './category.model';
import { ModelType } from '@typegoose/typegoose/lib/types';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(CategoryModel)
    private readonly categoryModel: ModelType<CategoryModel>,
  ) {}

  async create(dto: CategoryModel) {
    return this.categoryModel.create(dto);
  }

  async getAll() {
    return this.categoryModel.find().exec();
  }
}
