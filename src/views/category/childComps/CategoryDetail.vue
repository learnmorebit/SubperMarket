<template>
  <scroll
    class="catgory-detail"
    :pull-up-load="true"
    ref="scrolls"
    v-if="isShow"
  >
    <div v-if="categoryDetail.subcategories[0] != 'undefined'">
      <grid-view
        :cols="3"
        :lineSpace="15"
        :v-margin="20"
        v-if="isShow"
        class="grid"
      >
        <div
          v-for="(item, index) in categoryDetail.subcategories[0]"
          :key="index"
          class="menu-detail"
        >
          <a :href="item.link"></a>
          <img :src="item.image" alt="" class="image" @load="categoryLoad" />
          <div class="text">{{ item.title }}</div>
        </div>
      </grid-view>
    </div>

    <category-comm :categoryDetail="categoryDetail.rightList"></category-comm>
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
  data() {
    return {
      isShow: false,
    };
  },
  props: {
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

  activated() {
    this.isShow = this.categoryList !== null;
    // console.log(this.rightList);
    // this.rightList = this.categoryList;
    // console.log(typeof this.rightList);
    // console.log(this.$store.state.rightIndex);
    // console.log(this.categoryList[this.$store.state.rightIndex].subcategories);
    // console.log(this.categoryList.length);
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