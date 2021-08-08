import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';

import { getMongoConfig } from './configs/mongo.config';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { DepthModule } from './depth/depth.module';
import { SizeModule } from './size/size.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    ProductModule,
    CategoryModule,
    DepthModule,
    SizeModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
