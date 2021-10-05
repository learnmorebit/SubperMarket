<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <main-tabbar />
  </div>
</template>
<script>
import MainTabbar from "components/common/MainTabbar";
export default {
  components: {
    MainTabbar,
  },
  data() {
    return {};
  },
};
</script>
<style>
@import url(assets/css/base.css);
</style>
