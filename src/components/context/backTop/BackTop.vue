<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style >
/* .backtop {
  position: fixed;
  width: 40px;
  height: 40px;
  bottom: 50px;
  right: 10px;
  background-color: rgba(100, 100, 110, 0.4);
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
} */

.backtop img {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 50px;
  right: 10px;
  z-index: 9;
}
</style>
