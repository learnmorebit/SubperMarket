<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in CartItem"
        :key="index"
        :listitem="item"
      ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "common/scroll/Scroll";

import CartListItem from "./CartListItem";
export default {
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    CartItem() {
      return this.$store.state.cartList;
    },
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    loadMore() {},
    getScroll() {},
  },
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 89px;

  overflow: hidden;
}
</style>
