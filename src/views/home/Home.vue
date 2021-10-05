<template>
  <div id="box">
    <nav-bar class="margin">
      <div slot="center">首页</div>
    </nav-bar>

    <tab-control
      v-show="isFixed"
      ref="tabControl1"
      class="control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
    ></tab-control>
    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="2"
      @getScroll="getScroll"
      @pullingUp="loadMore"
      :pull-up-load="true"
    >
      <!-- <flow :imgInfo="imgInfo" class="swiper"  @tabcontrolFixed="tabcontrolFixed" ></flow> -->
      <home-swiper
        :imgInfo="imgInfo"
        @tabcontrolFixed="tabcontrolFixed"
      ></home-swiper>
      <commend :commend="commend"></commend>
      <feature></feature>
      <tab-control
        ref="tabControl2"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <goods :goodList="showGoods" />
    </scroll>
    <back-top @click.native="backClick" :class="{ isShow: isShow }"></back-top>
  </div>
</template>

<script>
// import {request} from "network/request"
import { getHomeMulitate, getHomeGoods } from "network/index";
//功能类
import NavBar from "components/common/navbar/NavBar";
import Flow from "components/context/Flow";
import Commend from "components/context/commend/Commend";
import Feature from "views/home/ChildVue/Feature";
import TabControl from "components/common/tabControl/TabControl";
import Scroll from "common/scroll/Scroll";
import BackTop from "components/context/backTop/BackTop";
import HomeSwiper from "views/home/ChildVue/HomeSwiper";
//数据类
import Goods from "components/context/goods/Goods";

//工具类
import { debounce } from "common/util/debounce";
import { MixinImgLoad, BackTopClick } from "common/util/mixin";
export default {
  components: {
    NavBar,
    TabControl,
    Scroll,
    BackTop,
    Commend,
    Flow,
    Feature,
    Goods,
    HomeSwiper,
  },
  mixins: [MixinImgLoad, BackTopClick],
  data() {
    return {
      currgoods: "pop",
      imgInfo: [], //图片信息
      commend: [], //推荐信息
      position: {},
      isFixed: false,
      isShow: false,
      flowTop: 0,
      currentY: 0,
      // imgLoad :null 监听图片加载完成的方法
      goods: {
        //商品信息，拿到每一个小分类中的第一页，所有数据信息，并且用对象封装
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currgoods].list;
    },
  },
  //在父组件的router-view  被  keep-alive 标签包裹时，这个属性可以使用 现在用来保存 离开home页面时的y ，并在回到页面时恢复
  activated() {
    //在返回这个页面时瞬间定位到离开时的位置
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.currentY, 0);
  },
  deactivated() {
    //1, 获取离开时的高度
    this.currentY = this.$refs.scroll.getY();
    //2， 在这里使用取消监听事件
    this.$bus.$off("imgLoad", this.pageImageLoad);
  },
  created() {
    //获取单个数据
    this.getHomeMulitate();
    //获取多个数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    /*   使用了mixin混入技术，这些代码都可以提取到mixin[] 中 */
    //挂载完成后的调用，这时候数据都已经存在
    //由于刷新监听图片加载完成在很多地方用到但是有些地方在不该刷新的时候刷新了，因此这里在离开之前需要取消监听函数
    // const loadimg = debounce(this.$refs.scroll.refresh, 1);
    // const imgLoad = () => {
    //   // /图片加载完成，调用load函数
    //   loadimg();
    // };
    // this.$bus.$on("imgLoad", imgLoad);
    // //等轮播图加载完成后设置 tab-control 的高度
    this.$bus.$on("commendLoad", () => {
      debounce(() => {
        this.$refs.scroll && this.$refs.scroll.refresh();
      }, 100)();
    });
  },
  methods: {
    /*
     *数据相关
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currgoods = "pop";
          break;
        case 1:
          this.currgoods = "new";
          break;
        case 2:
          this.currgoods = "sell";
          break;
      }
      this.$refs.tabControl2.currindex = index;
      this.$refs.tabControl1.currindex = index;
    },
    tabcontrolFixed() {
      this.flowTop = this.$refs.tabControl2.$el.offsetTop;
    },

    /* 
    功能相关 
    */

    getScroll(pos) {
      // console.log(pos);
      this.isFixed = Math.abs(-pos.y) > this.flowTop;
      this.isShow = pos.y > -1000 ? true : false;
    },

    loadMore() {
      this.getHomeGoods(this.currgoods);
    },
    //频繁请求数据防抖动函数,对哪个函数进行防抖，防抖间隔时间是多少

    /*
     *网络请求相关
     */
    getHomeMulitate() {
      getHomeMulitate().then((res) => {
        (this.imgInfo = res.data.banner.list),
          (this.commend = res.data.recommend.list);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        //数据放到数组中
        this.$refs.scroll.refresh();

        this.goods[type] && this.goods[type].list.push(...res.data.list);
        this.goods[type] && this.goods[type].page++;
        //在完成上拉加载更多后，执行finish函数
        this.$refs.scroll.finishPull();
      });
    },
  },
};
</script>

<style scoped>
#box {
  position: relative;
  height: 100vh;
}
.margin {
  /* position: fixed;
   */
  color: #fff;
  position: relative;
  /* top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9; */
}

.control {
  position: relative;
  z-index: 9;
  /* top: 44px; */
}
.wrapper {
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 49px;
  padding-bottom: 50px;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
}

.isShow {
  display: none;
}
</style>