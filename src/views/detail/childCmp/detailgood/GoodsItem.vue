<template>
  <div class="gooditem">
    {{ goodList }}
  </div>
</template>

<script>
export default {
  props: {
    goodList: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
</style>