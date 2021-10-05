import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const Home = () => import("views/home/Home")
const Category = () => import("views/category/Category")
const Cart = () => import("views/cart/Cart")
const Profile = () => import("views/profile/Profile")
const Detail = () => import("views/detail/Detail")

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [{
  path: '',
  redirect: "/home",

},
{
  path: "/home",
  component: Home,
  meta: {
    keepAlive: true
  }
},
{
  path: "/category",
  component: Category,
  meta: {
    keepAlive: true
  }
},
{
  path: "/cart",
  component: Cart,
  meta: {
    keepAlive: true
  }
},
{
  path: "/profile",
  component: Profile,
  meta: {
    keepAlive: true
  }
},
{
  path: "/detail/:iid",
  component: Detail,
  meta: {
    keepAlive: false
  }
}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

