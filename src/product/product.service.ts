import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ProductModel } from './product.model';

import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { FindProductDto } from './dto/find-product';
import { CategoryModel } from '../category/category.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: ModelType<ProductModel>,
  ) {}

  async create(dto) {
    const depths = dto.availableDepths.map((d: string) => {
      if (typeof d === 'string') {
        if (Types.ObjectId.isValid(d)) return Types.ObjectId(d);
        return d;
      }
      return d;
    });

    const sizes = dto.availableSizes.map((s: string) => {
      if (typeof s === 'string') {
        if (Types.ObjectId.isValid(s)) return Types.ObjectId(s);
        return s;
      }
      return s;
    });

    return this.productModel.create({
      ...dto,
      availableDepths: depths,
      availableSizes: sizes,
    });
  }

  async getProducts(): Promise<DocumentType<ProductModel>[]> | null {
    return this.productModel.find().exec();
    // return null;
  }

  async getProductById(id: string): Promise<DocumentType<ProductModel> | null> {
    return this.productModel.findById(id).exec();
  }

  async findByCategory(categoryId: string) {
    return this.productModel
      .find({ categoryId: Types.ObjectId(categoryId) })
      .exec();
  }

  async delete(id: string): Promise<DocumentType<ProductModel> | null> {
    return this.productModel.findByIdAndDelete(id).exec();
  }

  async deleteByCategoryId(categoryId: string) {
    return this.productModel
      .deleteMany({ categoryID: Types.ObjectId(categoryId) })
      .exec();
  }

  async findWithCategory(dto: FindProductDto) {
    return this.productModel
      .aggregate([
        {
          $match: {
            categoryId: Types.ObjectId(dto.category),
          },
        },
        {
          $sort: { _id: 1 },
        },
        {
          $limit: 10,
        },
        // { $addFields: { aDepths: { $toObjectId: 'availableDepths._id' } } },

        {
          $lookup: {
            from: 'Category',
            localField: 'categoryId',
            foreignField: '_id',
            as: 'categories',
          },
        },

        {
          $lookup: {
            from: 'Depth',
            localField: 'availableDepths',
            foreignField: '_id',
            as: 'depths',
          },
        },
      ])
      .exec() as ProductModel & {
      categories: CategoryModel[];
    };
  }
}
