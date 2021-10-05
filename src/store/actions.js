export default {
  addToCart(context, payLoad) {
    return new Promise((resolve, reject) => {
      const oldProduct = context.state.cartList.find(item => item.iid === payLoad.iid)
      if (oldProduct) {
        // product.push(payLoad)
        resolve("商品数量+1")
        context.commit("addCount", oldProduct)
      } else {
        resolve("商品添加成功")
        context.commit("addProduct", payLoad)
      }

    })
  }
}