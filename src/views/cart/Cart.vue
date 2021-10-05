<template>
  <div class="carts">
    <cart-nav></cart-nav>
    <cart-list></cart-list>
    <cart-botton></cart-botton>
  </div>
</template>

<script>
import CartNav from "./cartChild/CartNav";
import CartList from "./cartChild/CartList";
import CartBotton from "./cartChild/CartBotton";
export default {
  components: {
    CartNav,
    CartList,
    CartBotton,
  },
  data() {
    return {
      // product: [],
    };
  },
};
</script>

<style scoped>
.carts {
  position: relative;
  height: 100vh;
}
</style>

