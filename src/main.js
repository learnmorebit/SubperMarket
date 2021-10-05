import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//按导入toast插件，用于点击时产生交互效果
import toast from "common/toast"

//解决移动端300毫秒延迟
import FastClick from "fastclick"
FastClick.attach(document.body)
//图片懒加载 vue使用插件
/* import VueLazyLoad from "vue-lazyload"
Vue.use(VueLazyLoad, {
  loading: require("./assets/img/common/placeholder.png")
}) */

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()  //事件总线

//安装toast插件,vue会自动寻找这个插件的install方法
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
