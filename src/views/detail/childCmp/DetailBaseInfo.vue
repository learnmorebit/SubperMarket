<template>
  <!-- 在没有数据的时候不显示这个组件 -->
  <div v-if="Object.keys(goods).length !== 0">
    <div class="title-info">
      {{ goods.title }}
    </div>
    <div class="title-price">
      <span>{{ goods.newPrice }}</span>
      <span>{{ goods.oldPrice }}</span>
      <span v-if="goods.discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="service">
      <span v-for="item in goods.services.length - 1" :key="item">
        <div class="tips">
          <img :src="goods.services[item].icon" alt="" />
          {{ goods.services[item].name }}
        </div>
      </span>
    </div>
  </div>
</template>

<script >
export default {
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

<style scoped>
.title-info {
  margin-top: 10px;
  text-indent: 2rem;
  font-size: 16px;
  letter-spacing: 0.6px;
  margin-bottom: 10px;
}
.title-price {
  position: relative;
  margin-bottom: 10px;
}
.title-price span:nth-child(1) {
  color: #ff5777;
  font-size: 22px;
  padding-left: 10px;
  margin-right: 10px;
}
.title-price span:nth-child(2) {
  color: #888;
  text-decoration: line-through;
  margin-right: 14px;
}
.title-price span:nth-child(3) {
  position: absolute;
  color: #fff;
  top: -5px;
  background-color: deeppink;
  padding: 3px 10px;
  border-radius: 9px;
}
.info-other {
  color: #999;
  font-size: 12px;
  margin: 30px 0 30px 0;
  display: flex;
}
.info-other span {
  margin-left: 15px;
  flex: 1;
}
.service {
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  padding: 0 15px 0;
  color: #111;
}
.tips {
  flex: 1;
  text-align: center;
}
.service img {
  height: 12px;
  width: 12px;
}
</style>