<template>
  <div class="cart-botton">
    <div class="checked">
      <check-bottom
        class="checkAll"
        :show="SelectAll"
        @click.native="gross"
      ></check-bottom>
      <span class="selectall">全选</span>
    </div>
    <div class="total">总价:￥{{ getTotal }}</div>
    <div class="purcher" @click="toStatment">去结算 :({{ getTotallen }})</div>
  </div>
</template>

<script>
import CheckBottom from "components/context/backTop/CheckBottom";
import { debounce } from "common/util/debounce";
import { mapGetters } from "vuex";
export default {
  components: { CheckBottom },
  data() {
    return {};
  },
  computed: {
    CartItem() {
      return this.$store.state.cartList;
    },
    SelectAll() {
      let select = false;
      if (this.getTotallen === this.CartItem.length) {
        this.select = true;
      } else {
        this.select = false;
      }
      if (this.CartItem.length == 0) return false;
      return this.select;
    },
    ...mapGetters(["getTotal", "getTotallen"]),
  },
  methods: {
    gross() {
      //原本全选，点击后不全选，
      let cartList = this.$store.state.cartList;
      if (this.SelectAll) {
        for (let item of cartList) {
          item.checked = false;
        }
      } else {
        //原本全选，点击后不全选
        for (let item of cartList) {
          item.checked = true;
        }
      }
    },
    toStatment() {
      debounce(() => {
        if (this.getTotallen == 0) {
          this.$toast.show("请添加商品");
        } else {
          this.$toast.show("购买成功");
        }
      }, 500)();
    },
  },
};
</script>

<style scoped>
.cart-botton {
  position: absolute;
  display: flex;
  font-size: 15px;
  width: 100%;
  /* bottom: -642px; */
  justify-content: center;
  text-align: center;
  bottom: 49px;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
}
.checked {
  display: flex;
  width: 80px;
  line-height: 40px;
  text-align: center;
}

.checkAll {
  margin: 10px 5px 0 10px;
  width: 20px;
  height: 20px;
}
.total {
  flex: 1;
}
.purcher {
  width: 100px;
  background-color: orangered;
  color: #fff;
}
</style>