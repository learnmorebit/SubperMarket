import { debounce } from "./debounce"
export let MixinImgLoad = {
  data() {
    return {
      pageImageLoad: null, //图片加载完成后的监听事件
    }
  },
  mounted() {
    const loadimg = debounce(this.$refs.scroll.refresh, 1);
    this.pageImageLoad = () => {
      // /图片加载完成，调用load函数
      loadimg();
    };

    this.$bus.$on("imgLoad", this.pageImageLoad);
  }
}

export const BackTopClick = {
  methods: {

    backClick() {
      //点击返回按钮，让滚轮回到指定位置，第三个参数是花费时间
      this.$refs.scroll.scrollTo(0, -20);
    },
  }
}