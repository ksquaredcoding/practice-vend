import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
import { vendingMachineService } from "./VendingMachineService.js"

class ProductsService {
  async getAllProducts() {
    const products = await dbContext.Products.find()
    if (!products) {
      throw new BadRequest('No products found')
    }
    return products
  }

  async createProduct(productData) {
    if (productData.price % 0.25 != 0) {
      throw new Forbidden('Price must be multiple of $0.25')
    }
    const product = await dbContext.Products.create(productData)
    return product
  }

  async getProductById(productId) {
    const product = await dbContext.Products.findById(productId)
    if (!product) {
      throw new BadRequest('Invalid or Bad Event Id')
    }
    return product
  }

  async updateProduct(productData) {
    if (productData.paid % 0.25 != 0) {
      throw new Forbidden('Invalid denomination')
    }
    const product = await this.getProductById(productData.id)
    if (productData.paid < product.price) {
      throw new Forbidden('Insufficient Funds')
    }
    const changeDue = productData.paid - product.price
    await vendingMachineService.updateVendingMachine(product.vendingMachineId, product.price, changeDue)
    product.quantity--

    await product.save()
    return product
  }
}

export const productsService = new ProductsService()
