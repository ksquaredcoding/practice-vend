import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ProductSchema } from "../models/Product.js";
import { ValueSchema } from '../models/Value'
import { VendingMachineSchema } from "../models/VendingMachine.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Products = mongoose.model('Product', ProductSchema);
  VendingMachine = mongoose.model('VendingMachine', VendingMachineSchema);
}

export const dbContext = new DbContext()
