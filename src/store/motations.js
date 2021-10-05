export default {


  addCount(state, payLoad) {

    payLoad.count++
  },
  addProduct(state, payLoad) {
    payLoad.checked = false
    payLoad.count = 1
    state.cartList.push(payLoad)
  },
  changeRight(state, payLoad) {
    state.rightIndex = payLoad
  }
}