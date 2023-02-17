import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class VendingMachineService {
  async getVendingMachine() {
    const res = await api.get('/api/vend')
    AppState.vendingMachine = res.data
    console.log(res.data);
  }
}

export const vendingMachineService = new VendingMachineService()
