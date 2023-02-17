import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class VendingMachineService {
  async getVendingMachine() {
    const vendingMachine = await dbContext.VendingMachine.findOne()
    if (!vendingMachine) {
      throw new BadRequest('No vending machine found')
    }
    return vendingMachine
  }

  async getVendingMachineById(vendingMachineId) {
    const vendingMachine = await dbContext.VendingMachine.findById(vendingMachineId)
    if (!vendingMachine) {
      throw new BadRequest('No vending machine found')
    }
    return vendingMachine
  }

  async createVendingMachine(vendingMachineData) {
    const vendingMachine = await dbContext.VendingMachine.create(vendingMachineData)
    return vendingMachine
  }

  async updateVendingMachine(vendingMachineId, price, changeDue) {
    const vendingMachine = await this.getVendingMachineById(vendingMachineId)

    vendingMachine.sales += price
    vendingMachine.change -= (changeDue / 0.25)

    await vendingMachine.save()
    return vendingMachine
  }
}

export const vendingMachineService = new VendingMachineService()
