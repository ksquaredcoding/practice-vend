<template>
  <button class="btn btn-primary">
    <p>{{ product?.name }}</p>
    <p>{{ product?.price }}</p>
    <p>x{{ product?.quantity }}</p>
  </button>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true }
  },
  setup(props) {
    return {
      props
    }
  }
}
</script>


<style lang="scss" scoped></style>
