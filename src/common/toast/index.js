import Toast from "./Toast"
const obj = {}

//vue是自动传入的
obj.install = function (Vue) {
  // console.log("obj的install安装了");
  // document.body.addendChild(Toast.$el)

  //1, 创建组件构造器
  const ToastContruster = Vue.extend(Toast)
  //2，c根据组件构造器，new一个新的组件对象
  const toast = new ToastContruster()
  //3,将组件对象挂载到某一个 dom元素上， 和app的挂载一样
  toast.$mount(document.createElement("div"))
  //4, 在页面里添加这个实例el
  document.body.appendChild(toast.$el)

  //可以在这里执行toast的逻辑
  Vue.prototype.$toast = toast
}
export default obj