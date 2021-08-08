import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { DepthService } from './depth.service';
import { DepthModel } from './depth.model';

@Controller('depth')
export class DepthController {
  constructor(private readonly depthService: DepthService) {}

  @HttpCode(200)
  @Post('create')
  async create(@Body() dto: DepthModel) {
    return this.depthService.create(dto);
  }

  @Get()
  async getAll() {
    return this.depthService.getAll();
  }
}
