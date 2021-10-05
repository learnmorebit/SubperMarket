<template>
  <div class="commend">
    <div v-for="(item, index) in commend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="commendLoad" />
        <div>{{ item.title }}</div>
      </a>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  props: {
    commend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    commendLoad() {
      // console.log(this.$bus);
      this.$bus.$emit("commendLoad");
    },
  },
};
</script>

<style scoped>
.commend {
  display: flex;
  width: 100%;
  text-align: center;
  margin: 10px 0 20px;
  font-size: 14px;
  border-bottom: 10px solid #eee;
}
.commend div img {
  width: 80%;
  margin-bottom: 5px;
}
.commend > div {
  flex: 1;
  margin-bottom: 20px;
}
</style>