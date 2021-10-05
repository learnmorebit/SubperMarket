<template>
  <nav-bar>
    <div slot="center">购物车( {{ cartLength }} )</div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { mapGetters } from "vuex";
export default {
  components: {
    NavBar,
  },
  computed: {
    //getter的辅助函数，可以让getter函数和computed计算属性挂载
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style>
</style>