<template>
  <div class="container bg-dark my-2">
    <div class="row justify-content-evenly">
      <div class="col-3 bg-light mt-4">
        <p>Total Sales: ${{ sales }}</p>
      </div>
      <div class="col-3 bg-light mt-4">
        <p>Funds: ${{ funds }}</p>
      </div>
      <div class="col-3 bg-light mt-4">
        <p>Thank you!</p>
      </div>
    </div>
    <div class="row justify-content-evenly">
      <slot></slot>
    </div>
    <div class="row justify-content-evenly row-cols-4 m-2 p-2">
      <div><button class="btn btn-success" @click="addFunds(0.25)">$0.25</button></div>
      <div><button class="btn btn-success" @click="addFunds(1.00)">$1.00</button></div>
      <div><button class="btn btn-success" @click="addFunds(5.00)">$5.00</button></div>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from '../AppState'

export default {
  props: {
    vendingMachine: { type: Object, required: true }
  },
  setup(props) {
    return {
      props,
      funds: computed(() => AppState.funds.toFixed(2)),
      sales: computed(() => AppState.vendingMachine?.sales?.toFixed(2)),
      addFunds(num) {
        AppState.funds += num
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>
