import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ShopProductController } from './shop-product.controller';
import { ShopProductSchema } from './shop-product.model/shop-product.model';
import { ShopProductService } from './shop-product.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'ShopProduct', schema: ShopProductSchema,
    }]),
  ],
  providers: [ShopProductService],
  controllers: [ShopProductController]
})
export class ShopProductModule {}
