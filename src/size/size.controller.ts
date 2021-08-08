import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';

import { SizeService } from './size.service';
import { SizeModel } from './size.model';

@Controller('size')
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @HttpCode(200)
  @Post('create')
  async create(@Body() dto: SizeModel) {
    return this.sizeService.create(dto);
  }

  @Get()
  async getAll() {
    return this.sizeService.getAll();
  }
}
