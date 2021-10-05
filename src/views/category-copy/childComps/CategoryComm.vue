<template>
  <div v-if="Object.keys(categoryDetail).length !== 0">
    <tab-control :titles="titles" @tabClick="tabClick"></tab-control>
    <goods :goodList="categoryDetail[persent]" />
  </div>
</template>

<script>
import Goods from "components/context/goods/Goods";
import GoodsItem from "components/context/goods/GoodsItem";
import tabControl from "components/common/tabControl/TabControl";
export default {
  data() {
    return {
      titles: ["流行", "新款", "精选"],
      persent: "pop",
    };
  },

  props: {
    categoryDetail: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    tabControl,
    Goods,
    GoodsItem,
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.persent = "pop";
          break;
        case 1:
          this.persent = "new";
          break;
        case 2:
          this.persent = "sell";
          break;
      }
    },
  },
};
</script>

<style>
</style>