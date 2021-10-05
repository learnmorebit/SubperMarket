<template>
  <div id="detail">
    {{ $store.product }}
    <detail-comp
      class="navDetail"
      @detailClick="detailClick"
      ref="nav"
    ></detail-comp>
    <scroll
      class="detailScroll"
      ref="scroll"
      @getScroll="getScroll"
      :pull-up-load="true"
      @pullingUp="pullingUp"
      :probe-type="2"
    >
      <detail-swiper
        :topItem="topImg"
        class="topImg"
        @getTopimg="getTopimg"
      ></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :goodsInfo="goodsInfo"
        @detailLoad="detailLoad"
      ></detail-goods-info>
      <detail-size ref="size" :sizeInfo="detailSize"></detail-size>
      <detail-command ref="discuss" :comment="comment"></detail-command>
      <goods ref="command" :goodList="goodlist"></goods>
    </scroll>
    <back-top :class="{ backtops: show }" @click.native="backClick"></back-top>
    {{ $store.product }}
    <detail-bottom class="detail-bottom" @cartClick="addTocart"></detail-bottom>
    <toast :message="message" :is-show="isShow"></toast>
  </div>
</template>

<script>
import DetailComp from "./childCmp/detailComp";
import DetailSwiper from "./childCmp/DetailSwiper";
import DetailBaseInfo from "./childCmp/DetailBaseInfo";
import DetailShopInfo from "./childCmp/DetailShopInfo";
import DetailGoodsInfo from "./childCmp/DetailGoodsInfo";
import DetailSize from "./childCmp/DetailSize";
import DetailCommand from "./childCmp/DetailCommand";
import DetailBottom from "./childCmp/DetailBottom";
import { getDetail, Gooddetail, Shop, Size, getRecommed } from "network/detail";

import Goods from "components/context/goods/Goods";

import Scroll from "common/scroll/Scroll";
import { MixinImgLoad, BackTopClick } from "common/util/mixin";
import BackTop from "components/context/backTop/BackTop";

//跳出的显示框
import Toast from "common/toast/Toast";

import { debounce } from "common/util/debounce";
export default {
  name: "detail",
  components: {
    DetailComp,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailBottom,
    DetailGoodsInfo,
    DetailSize,
    DetailCommand,
    Scroll,
    Goods,
    BackTop,
    Toast,
  },

  mixins: [MixinImgLoad, BackTopClick],
  data() {
    return {
      iid: "",
      topImg: [],
      goods: {},
      shop: {},
      goodsInfo: {},
      detailSize: {},
      comment: [],
      goodlist: [],
      // backtop: 0,
      show: true,
      explict: [],
      getthemeY: null,
      currentInd: 0,
      //判断提示框信息以及是否显示
      message: "",
      isShow: false,
    };
  },
  created() {
    //1,获取点击后的iid
    this.iid = this.$route.params.iid;

    // console.log(this.iid);
    //根据iid获取数据
    getDetail(this.iid).then((res) => {
      const result = res.result;

      this.topImg = result.itemInfo.topImages;
      //(1)获取商品数据
      this.goods = new Gooddetail(
        result.itemInfo,
        result.columns,
        result.shopInfo.services
      );
      //(2) 获取店铺信息
      this.shop = new Shop(result.shopInfo);

      //(3) 获取详细信息
      this.goodsInfo = result.detailInfo;
      //(4) 获取尺寸信息
      this.detailSize = new Size(
        result.itemParams.info,
        result.itemParams.rule
      );

      //(5)获取评价信息
      this.comment = result.rate.list;
    });
    getRecommed().then((res) => {
      this.goodlist = res.data.list;
    });

    //(6) 对请求的子元素的高度请求函数进行一个封装，返回值是一个函数
    this.getthemeY = debounce(() => {
      this.explict = [];
      this.explict.push(0);
      this.explict.push(-this.$refs.size.$el.offsetTop);
      this.explict.push(-this.$refs.discuss.$el.offsetTop);
      this.explict.push(-this.$refs.command.$el.offsetTop);
      this.explict.push(-Number.MAX_VALUE); //这里放入一个最大数，方便获取导航栏的当前位置
    }, 100);
  },
  mounted() {
    // const loadimg = debounce(this.$refs.scroll.refresh, 1);
    // const imgLoad = () => {
    //   loadimg();
    // };
    // this.$refs.on("imgLoad", imgLoad);
  },
  destroyed() {
    this.$bus.$off("imgLoad", this.pageImgLoad);
  },
  methods: {
    addTocart() {
      //1， 获取需要展示的商品信息
      const product = {};
      product.iid = this.iid;
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.picture = this.topImg[0];
      //2，将商品添加到购物车里   没有封装toast组件时这样使用
      // this.$store.dispatch("addToCart", product).then((res) => {
      //   this.message = res;
      //   this.isShow = true;
      //   setTimeout(() => {
      //     this.message = "";
      //     this.isShow = false;
      //   }, 1500);
      // });

      //3，封装了toast组件时这样使用
      this.$store.dispatch("addToCart", product).then((res) => {
        this.$toast.show(res, 2000);
      });
    },
    getTopimg() {
      this.$refs.scroll.scroll.refresh();
    },
    detailLoad() {
      this.$refs.scroll.scroll.refresh();

      //防抖操作，因为debounce返回值是当前这个函数，因此需要调用一下
      this.getthemeY();
    },
    pullingUp() {},
    getScroll(pos) {
      this.show = -pos.y < 1000;

      let len = this.explict.length - 1;
      for (let i = 0; i < len; i++) {
        // console.log(this.explict[i]);
        if (
          this.currentInd != i &&
          pos.y <= this.explict[i] &&
          pos.y > this.explict[i + 1]
        ) {
          this.currentInd = i;
          this.$refs.nav.currentIndex = this.currentInd;
        }
      }
    },
    detailClick(idx) {
      this.$refs.scroll.scrollTo(0, this.explict[idx], 200);
    },
  },
  mounted() {
    this.iid = this.$route.params.iid;
    console.log(this.iid);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  background-color: #fff;
  z-index: 9;
  height: 100vh;
}
.detailScroll {
  height: calc(100% - 93px);
  overflow: hidden;
}
.navDetail {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-bottom {
  height: 49px;
}
.backtops {
  display: none;
}
</style>