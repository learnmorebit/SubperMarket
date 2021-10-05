<template>
  <div class="goods-item" @click="detailClick">
    <img :src="showImg" alt="" @load="imgLoad" />
    <!-- <img v-lazy="showImg" alt="" @load="imgLoad" /> -->
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImg() {
      return (
        this.goodsItem.img ||
        this.goodsItem.image ||
        this.goodsItem.showLarge.img
      );
    },
  },

  methods: {
    imgLoad() {
      //向home组件中传递刷新消息，用到兄弟组件传值
      this.$bus.$emit("imgLoad");
    },
    detailClick() {
      this.$bus.$emit("changeIid", this.goodsItem.iid);
      this.$router.push("/detail/" + this.goodsItem.iid);
      // this.$router.push("/detail/", params: { iid: this.goodsItem.iid });
    },
  },
};
</script>

<style>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: pink;
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>