<template>
  <div id="shop-item">
    <div class="item-selector">
      <!-- 组件的点击，要加上.native -->
      <check-bottom
        @click.native="changeClick"
        :show="listitem.checked"
      ></check-bottom>
    </div>
    <div class="item-img">
      <img :src="listitem.picture" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ listitem.title }}</div>
      <div class="item-desc">{{ listitem.desc }}</div>
      <div class="info-bottom">
        <span class="item-price left">￥{{ listitem.price }}</span>
        <span class="item-count right">x{{ listitem.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBottom from "components/context/backTop/CheckBottom";
export default {
  name: "CartListItem",
  components: {
    CheckBottom,
  },
  props: {
    listitem: Object,
  },
  methods: {
    changeClick() {
      this.listitem.checked = !this.listitem.checked;
    },
  },
};
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  width: 14%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
.left,
.right {
  display: inline-block;
}
.right {
  position: absolute;
  right: 10px;
}
</style>