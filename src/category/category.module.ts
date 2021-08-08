import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypegooseModule } from 'nestjs-typegoose';

import { CategoryModel } from './category.model';

@Module({
  providers: [CategoryService],
  controllers: [CategoryController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: CategoryModel,
        schemaOptions: {
          collection: 'Category',
        },
      },
    ]),
  ],
})
export class CategoryModule {}
