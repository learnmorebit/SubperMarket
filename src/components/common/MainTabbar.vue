<template>
  <div>
    <!-- <router-view></router-view> -->
    <tab-bar>
      <tab-bar-item path="/home" actColor="blue">
        <div slot="notact">
          <img src="~assets/img/tabbar/cc-home.png" />
        </div>
        <div slot="active">
          <img src="~assets/img/tabbar/cc-home (1).png" />
        </div>
        <div slot="text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/category" actColor="blue">
        <div slot="notact">
          <img src="~assets/img/tabbar/category.png" />
        </div>
        <div slot="active">
          <img src="~assets/img/tabbar/category (1).png" />
        </div>
        <div slot="text">类别</div>
      </tab-bar-item>

      <tab-bar-item path="/cart" actColor="blue">
        <div slot="notact">
          <img src="~assets/img/tabbar/shop-cart-1.png" />
        </div>
        <div slot="active">
          <img src="~assets/img/tabbar/shop-cart-1 (1).png" />
        </div>
        <div slot="text">购物车</div>
      </tab-bar-item>

      <tab-bar-item path="/profile" actColor="blue">
        <div slot="notact">
          <img src="~assets/img/tabbar/profile.png" />
        </div>
        <div slot="active">
          <img src="~assets/img/tabbar/profile (1).png" />
        </div>
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import { TabBar, TabBarItem } from "./tabbar/index";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>