<template>
  <scroll
    class="catgory-detail"
    :pull-up-load="true"
    ref="scrolls"
    v-if="Object.keys(categoryList).length !== 0"
  >
    <grid-view
      :cols="3"
      :lineSpace="15"
      :v-margin="20"
      v-if="categoryList"
      class="grid"
    >
      <div
        v-for="(item, index) in categoryList"
        :key="index"
        class="menu-detail"
      >
        <a :href="item.link"></a>
        <img :src="item.image" alt="" class="image" @load="categoryLoad" />
        <div class="text">{{ item.title }}</div>
      </div>
    </grid-view>
    <category-comm :categoryDetail="categoryDetail"></category-comm>
  </scroll>
</template>

<script>
import Scroll from "common/scroll/Scroll";
import GridView from "common/gridView/GridView";
import CategoryComm from "./CategoryComm";

export default {
  name: "CategoryDetail",
  components: {
    Scroll,
    GridView,
    CategoryComm,
  },

  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
    categoryDetail: {
      type: Object,
      default() {
        return {};
      },
    },
    istrue: true,
  },
  created() {
    this.$bus.$on("imgLoad", () => {
      this.$refs.scrolls.refresh();
    });
  },
  methods: {
    categoryLoad() {
      this.$refs.scrolls.refresh();
    },
  },
};
</script>

<style scoped>
.catgory-detail {
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 54px;
  overflow: hidden;
}
.menu-detail {
  /* width: 275px; */
  text-align: center;
  font-size: 12px;
  /* position: relative; */
}
.grid {
  width: 310px;
  float: right;
}
.image {
  width: 80%;
}
.text {
  margin-top: 15px;
}
</style>