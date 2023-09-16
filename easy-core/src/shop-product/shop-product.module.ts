import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ShopProductSchema } from './Model/shop-product.model';
import { ShopProductService } from './Service/shop-product.service';
import { ShopProductController } from './Controller/shop-product.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'ShopProduct',
        schema: ShopProductSchema,
      },
    ]),
  ],
  providers: [ShopProductService],
  controllers: [ShopProductController],
})
export class ShopProductModule {}
