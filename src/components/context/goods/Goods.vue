<template>
  <div class="goods" v-if="goodList.length !== 0">
    <goods-item
      v-for="(item, index) in goodList"
      :key="index"
      :goodsItem="item"
    >
    </goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
export default {
  components: {
    GoodsItem,
  },
  props: {
    goodList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
/* 子组件分布为flex，并且占两份 */
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>