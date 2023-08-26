import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ShopProduct } from './shop-product.model/shop-product.model';

@Injectable()
export class ShopProductService {
  constructor(
    @InjectModel('ShopProduct')
    private readonly shopProductModel: Model<ShopProduct>,
  ) {}

  async create(doc: ShopProduct) {
    const result = await new this.shopProductModel(doc).save();
    return result.id;
  }

  async findById(id: number) {
    const result = await this.shopProductModel.findById(id);
    return result;
  }

  async findAll() {
    const result = await this.shopProductModel.find();
    return result;
  }

  async update(ShopProduct: ShopProduct) {
    // ...
  }

  async remove(ShopProduct: ShopProduct) {
    // ...
  }
}
