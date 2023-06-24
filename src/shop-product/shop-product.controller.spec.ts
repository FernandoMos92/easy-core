import { Test, TestingModule } from '@nestjs/testing';
import { ShopProductController } from './shop-product.controller';

describe('ShopProductController', () => {
  let controller: ShopProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopProductController],
    }).compile();

    controller = module.get<ShopProductController>(ShopProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
