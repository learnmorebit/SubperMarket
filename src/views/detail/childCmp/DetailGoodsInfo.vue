<template>
  <div class="goodsinfo" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="start"></div>
    <div class="desc">{{ goodsInfo.desc }}</div>
    <div class="end"></div>
    <div class="info-key">{{ goodsInfo.detailImage[0].key }}</div>
    <div>
      <img
        v-for="(item, index) in goodsInfo.detailImage[0].list"
        :key="index"
        :src="item"
        alt=""
        @load="detailLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
    },
  },
  methods: {
    detailLoad() {
      this.$emit("detailLoad");
    },
  },
};
</script>

<style scoped>
.goodsinfo {
  position: relative;
}
.desc {
  padding: 20px;
  color: #444;
}
.goodsinfo .start,
.goodsinfo .end {
  margin-left: 20px;
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.goodsinfo .end {
  margin-left: 0px;
  margin-right: 20px;
}
.start {
  float: left;
}
.end {
  float: right;
}
.info-key {
  margin: 10px 10px 20px 15px;
  color: #333;
  font-size: 17px;
}
.start::before,
.end::after {
  content: "";
  position: absolute;
  height: 4px;
  width: 4px;
  right: 0;
  top: -4px;
  background-color: #000;
}
.start::before {
  left: 0;
}
img {
  width: 100%;
}
</style>