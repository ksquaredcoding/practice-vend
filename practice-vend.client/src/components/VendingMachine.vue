<template>
  <div class="container bg-dark">
    <div class="row justify-content-evenly">
      <div class="col-3 bg-light">
        <p>Total Sales: {{ sales }}</p>
      </div>
      <div class="col-3 bg-light">
        <p>Funds: ${{ funds }}</p>
      </div>
      <div class="col-3 bg-light">
        <p>Thank you!</p>
      </div>
    </div>
    <div class="row justify-content-evenly">
      <slot></slot>
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
      sales: computed(() => AppState.vendingMachine?.sales)
    }
  }
}
</script>


<style lang="scss" scoped></style>
