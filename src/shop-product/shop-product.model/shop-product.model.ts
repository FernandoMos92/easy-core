import * as mongoose from 'mongoose';

export const ShopProductSchema = new mongoose.Schema({
  product: { type: String, required: true },
  isBought: { type: Boolean, required: true },
  quantity: { type: Number, required: false },
  measure: {type: String, required: false}
});

export interface ShopProduct {
  id: string;
  product: string;
  isBought: boolean;
  quantity: number;
  measure: string;
}

export class ShopProductModel {}
