<template>
  <div v-if="Object.keys(sizeInfo).length !== 0" class="detailsize">
    <table
      v-for="(item, index) in sizeInfo.tables"
      :key="index"
      class="table-info"
    >
      <tr v-for="(tr, i) in item" :key="i">
        <td v-for="(th, j) in tr" :key="j">{{ th }}</td>
      </tr>
    </table>
    <table class="size-info">
      <tr v-for="(item, index) in sizeInfo.set" :key="index">
        <td>{{ item.key }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    sizeInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.detailsize {
  margin: 20px;
  padding-bottom: 10px;
}
.table-info {
  width: 100%;
  border-bottom: 1px solid #444;
  border-collapse: collapse;
}
.table-info tr,
.size-info tr {
  height: 46px;
  margin-right: 20px;
}
.table-info td {
  font-size: 15px;

  padding: 10px;
  border-bottom: 1px solid #eee;
}
.size-info {
  width: 100%;
  /* border-collapse: collapse; */
}
.size-info td {
  font-size: 14px;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
.size-info tr td:nth-child(2) {
  color: #eb4868;
}
</style>