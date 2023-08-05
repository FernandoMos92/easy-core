// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopProductModule } from './shop-product/shop-product.module';
import { ConfigModule } from '@nestjs/config';

const { MONGO_DATABASE, MONGO_USERNAME, MONGO_PASSWORD } = process.env;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@easybuyercluster.kk3hhta.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`,
    ),
    ShopProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
