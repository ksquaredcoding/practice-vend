import { Auth0Provider } from '@bcwdev/auth0provider'
import { vendingMachineService } from "../services/VendingMachineService.js"
import BaseController from '../utils/BaseController'

export class VendingMachineController extends BaseController {
  constructor() {
    super('api/vend')
    this.router
      .post('', this.createVendingMachine)
      .get('', this.getVendingMachine)
  }

  async createVendingMachine(req, res, next) {
    try {
      const vendingMachine = await vendingMachineService.createVendingMachine(req.body)
      res.send(vendingMachine)
    } catch (error) {
      next(error)
    }
  }

  async getVendingMachine(req, res, next) {
    try {
      const vendingMachine = await vendingMachineService.getVendingMachine()
      res.send(vendingMachine)
    } catch (error) {
      next(error)
    }
  }

}
