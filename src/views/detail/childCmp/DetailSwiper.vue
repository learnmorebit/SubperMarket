<template>
  <swiper class="swiper-item">
    <swiper-item v-for="(item, index) in topItem" :key="index">
      <img :src="item" alt="" @load="getTopimg" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  components: {
    Swiper,
    SwiperItem,
  },

  props: {
    topItem: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    getTopimg() {
      this.$emit("getTopimg");
    },
  },
};
</script>

<style scoped>
.swiper-item {
  height: 330px;
  overflow: hidden;
}
</style>