<template>
  <div class="category">
    <nav-bar> <div slot="center">商品分类</div> </nav-bar>
    <category-menu> </category-menu>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CategoryMenu from "./childComps/CategoryMenu";
// import Scroll from "common/scroll/Scroll";
import { getCategory } from "network/category";

export default {
  components: { NavBar, CategoryMenu },
  data() {
    return {};
  },
  mounted() {
    getCategory().then((res) => {});
  },
  created() {},
};
</script>

<style scoped>
</style>
