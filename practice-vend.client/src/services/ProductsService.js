import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProductsService {
  async getAllProducts() {
    const res = await api.get('/api/products')
    AppState.products = res.data
  }
}

export const productsService = new ProductsService()
