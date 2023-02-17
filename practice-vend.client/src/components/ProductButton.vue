<template>
  <button class="btn btn-primary px-5 m-2" @click="purchaseProduct(product)">
    <p>{{ product?.name }}</p>
    <p>${{ product?.price.toFixed(2) }}</p>
    <p>x{{ product?.quantity }}</p>
  </button>
</template>

<script>
import { AppState } from "../AppState.js";
import { productsService } from "../services/ProductsService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    product: { type: Object, required: true }
  },
  setup(props) {
    return {
      props,
      async purchaseProduct(product) {
        try {
          product.paid = AppState.funds
          await productsService.purchaseProduct(product)
        } catch (error) {
          console.error('[ERROR example]', error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>
