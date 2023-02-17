<template>
  <VendingMachine :vendingMachine="vendingMachine">
    <div class="col-3" v-for="p in products">
      <ProductButton :product="p" :key="p.id" />
    </div>
  </VendingMachine>
</template>

<script>
import VendingMachine from "../components/VendingMachine.vue";
import { vendingMachineService } from "../services/VendingMachineService.js";
import { productsService } from "../services/ProductsService.js";
import { computed, onMounted } from "vue";
import { AppState } from '../AppState'
import ProductButton from "../components/ProductButton.vue";

export default {
  setup() {
    async function getVendingMachine() {
      try {
        await vendingMachineService.getVendingMachine()
        await getAllProducts()
      } catch (error) {
        console.error('[ERROR GETTING VENDING MACHINE]', error)
      }
    }
    async function getAllProducts() {
      try {
        await productsService.getAllProducts()
      } catch (error) {
        console.error('[ERROR GETTING PRODUCTS]', error)
      }
    }
    onMounted(() => {
      getVendingMachine()
    })
    return {
      products: computed(() => AppState.products),
      vendingMachine: computed(() => AppState.vendingMachine)
    };
  },
  components: { VendingMachine, ProductButton }
}
</script>

<style scoped lang="scss"></style>
