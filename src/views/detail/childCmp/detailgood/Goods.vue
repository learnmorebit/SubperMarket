<template>
  <div v-if="Object.keys(goods).length !== 0" class="goods">
    <goods-item v-for="(item, index) in goods" :key="index" :goodList="item">
    </goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
export default {
  components: { GoodsItem },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.goods {
  display: flex;
  justify-content: space-around;
}
</style>