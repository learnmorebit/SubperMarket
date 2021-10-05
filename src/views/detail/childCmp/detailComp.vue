<template>
  <div class="detailc">
    <nav-bar color="blank">
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="center">
        <span
          v-for="(item, index) in control"
          :key="index"
          @click="isActive(index)"
          :class="{ activeDetail: currentIndex == index }"
        >
          {{ item }}
        </span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      control: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },

  methods: {
    isActive(index) {
      this.currentIndex = index;
      this.$emit("detailClick", this.currentIndex);
    },
    backClick() {
      //返回上一次路由
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.detailc {
  color: #000;
  height: 44px;
}
.center {
  display: flex;
  font-size: 14px;
}
.center span {
  flex: 1;
}
.activeDetail {
  color: deeppink;
  border-bottom: 1px solid deeppink;
}
.left img {
  position: fixed;
  left: 10px;
  top: 13px;
}
</style>