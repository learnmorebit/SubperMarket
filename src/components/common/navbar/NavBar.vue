<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "deeppink",
    },
  },
  computed: {
    defColor() {
      return { backgroundColor: this.color };
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: #ff8198;
  color: #fff;
  box-shadow: 1px 1px 2px rgba(100, 100, 100, 0.1);
  text-align: center;
  height: 44px;
  line-height: 44px;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>