<template>
  <div class="icon" :class="{ active: show }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.icon {
  position: relative;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #888;
  border: 2px solid #888;
}
.active {
  background-color: red;
  border: 2px solid red;
}
.icon img {
  position: absolute;
  top: 2px;
  left: 2px;
}
</style>