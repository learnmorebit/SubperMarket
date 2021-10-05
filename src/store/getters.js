export default {
  cartLength(state) {
    return state.cartList.length
  },
  getTotal(state) {
    return state.cartList.filter(item => item.checked).reduce((priduce, curr) => {
      return priduce + curr.count * curr.price
    }, 0).toFixed(2)
  },
  getTotallen(state) {
    return state.cartList.filter(item => item.checked).length
  }
}