// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './shop-product/Controller/app.controller';
import { AppService } from './shop-product/Service/app.service';
import { ShopProductModule } from './shop-product/shop-product.module';
import { ConfigModule } from '@nestjs/config';

const { MONGO_DATABASE, MONGO_USERNAME, MONGO_PASSWORD } = process.env;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_DATABASE}.kk3hhta.mongodb.net/?retryWrites=true&w=majority`,
    ),
    ShopProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
