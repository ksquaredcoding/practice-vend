import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from "../utils/Pop.js"
import { api } from './AxiosService'
import { vendingMachineService } from "./VendingMachineService.js"

class ProductsService {
  async getAllProducts() {
    const res = await api.get('/api/products')
    AppState.products = res.data
  }

  async purchaseProduct(product) {
    if (product.paid < product.price) {
      Pop.error('Insufficient Funds')
      return
    }
    const changeDue = product.paid - product.price
    product.quantity--
    await api.put(`/api/products/${product.id}`, product)
    let index = AppState.products.findIndex(p => p.id == product.id)
    AppState.products.splice(index, 1, product)
    await vendingMachineService.getVendingMachine()
    AppState.funds = 0
    Pop.success(`You have purchased ${product.name}, thank you! Here's your change: $${changeDue.toFixed(2)}.`)
  }
}

export const productsService = new ProductsService()
