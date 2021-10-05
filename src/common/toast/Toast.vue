<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  // props: {
  //   message: String,
  //   isShow: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   delay: Number,
  // },
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(mess, delay = 2000) {
      this.message = mess;
      this.isShow = true;
      setTimeout(() => {
        this.message = "";
        this.isShow = false;
      }, delay);
    },
  },
};
</script>

<style>
.toast {
  position: fixed;
  z-index: 999;
  padding: 8px 10px;
  top: 50%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
}
</style>