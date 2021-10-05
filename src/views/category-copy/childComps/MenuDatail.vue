<template>
  <scroll
    class="menu-scroll"
    :pull-up-load="true"
    ref="scroll"
    v-if="Object.keys(menuDetail).length !== 0"
  >
    <div
      v-for="(item, index) in menuDetail"
      :key="index"
      class="tab-control"
      :class="{ active: currindex == index }"
      @click="tabControl(index)"
    >
      <div>
        {{ item.title }}
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "common/scroll/Scroll";
import { debounce } from "common/util/debounce";
export default {
  components: {
    Scroll,
  },
  data() {
    return {
      currindex: 0,
    };
  },

  props: {
    menuDetail: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabControl(index) {
      this.currindex = index;
      this.$emit("getIndex", index);
    },
  },
};
</script>

<style scoped>
.menu-scroll {
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 54px;
  overflow: hidden;
}
.tab-control {
  height: 45px;
  background-color: #ccc;
  text-align: center;
  line-height: 45px;
}
.active {
  background-color: #fff;
  border-left: 1px solid rgb(255, 108, 164);
}
</style>