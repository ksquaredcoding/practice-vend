import { Schema } from "mongoose";
import { SCHEMA_OPTIONS } from "../db/DbUtils.js";

export const VendingMachineSchema = new Schema({
  change: { type: Number, default: 1000 },
  sales: { type: Number, default: 0 },
  denominations: { type: Number, enum: [5, 1, 0.25] }
}, SCHEMA_OPTIONS)
