import { Schema } from "mongoose";
import { ObjectId, SCHEMA_OPTIONS } from "../db/DbUtils.js";

export const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 100 },
  vendingMachineId: { type: ObjectId, required: true, ref: 'VendingMachine' }
}, SCHEMA_OPTIONS)

ProductSchema.virtual('vendingMachine', {
  localField: 'vendingMachineId',
  foreignField: '_id',
  justOne: true,
  ref: 'VendingMachine'
})
