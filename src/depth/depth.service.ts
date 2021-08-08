import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { DepthModel } from './depth.model';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';

@Injectable()
export class DepthService {
  constructor(
    @InjectModel(DepthModel) private readonly depthModel: ModelType<DepthModel>,
  ) {}

  async create(dto: DepthModel): Promise<DocumentType<DepthModel>> {
    return this.depthModel.create(dto);
  }

  async getAll(): Promise<DocumentType<DepthModel>[] | null> {
    return this.depthModel.find().exec();
  }
}
