import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ShopProductService } from '../Service/shop-product.service';
import { ShopProduct } from '../Model/shop-product.model';

@Controller('shop-product')
export class ShopProductController {
  constructor(private service: ShopProductService) {}

  @Get('findById/:id')
  get(@Param() params) {
    return this.service.findById(params.id);
  }

  @Get('find')
  getAll() {
    return this.service.findAll();
  }

  @Post('create')
  create(@Body() user: ShopProduct) {
    return this.service.create(user);
  }

  @Put('update')
  update(@Body() user: ShopProduct) {
    return this.service.update(user);
  }

  @Delete('delete/:id')
  remove(@Param() params) {
    return this.service.remove(params.id);
  }
}
