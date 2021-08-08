import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';

import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { SizeModel } from './size.model';

@Injectable()
export class SizeService {
  constructor(
    @InjectModel(SizeModel) private readonly sizeModel: ModelType<SizeModel>,
  ) {}

  async create(dto: SizeModel): Promise<DocumentType<SizeModel>> {
    return this.sizeModel.create(dto);
  }

  async getAll(): Promise<DocumentType<SizeModel>[] | null> {
    return this.sizeModel.find().exec();
  }
}
