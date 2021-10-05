import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./motations"
import actions from "./actions"
import getters from "./getters"
Vue.use(Vuex)

const state = {
  cartList: [],
  rightIndex: 0,
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  },
  getters
})
