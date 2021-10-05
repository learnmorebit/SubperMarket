<template>
  <swiper class="swiper-item">
    <swiper-item v-for="(item, index) in imgInfo" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="tabImgLoad" />
      </a>
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
    imgInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabImgLoad() {
      this.$emit("tabcontrolFixed");
    },
  },
};
</script>

<style>
.swiper-item {
  margin-top: 21px;
}
</style>