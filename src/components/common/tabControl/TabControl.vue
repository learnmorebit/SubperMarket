<template>
  <div class="tabControl">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="index"
      @click="itemClick(index)"
      :class="{ activeClass: currindex === index }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currindex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index) {
      this.currindex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style>
.tabControl {
  display: flex;
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.activeClass {
  color: deeppink;
}
.activeClass span {
  padding: 3px;
  border-bottom: 2px solid deeppink;
}
</style>