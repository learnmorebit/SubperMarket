<template>
  <div v-if="comment.length !== 0">
    <div class="comment">
      <div class="commentL">用户评价</div>
      <div class="commentR">更多</div>
    </div>
    <div class="commentdetail">{{ comment[0].content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.comment {
  position: relative;
  width: 100%;
  line-height: 80px;
  border-top: 2px solid #e0e0ce;
  height: 80px;
  border-bottom: 2px solid #e0e0ce;
}
.commentL {
  position: absolute;
  left: 20px;
}
.commentR {
  position: absolute;
  right: 20px;
}
.commentdetail {
  padding-left: 10px;
  padding-top: 10px;
  margin: 10px;
  padding-bottom: 10px;
}
</style>