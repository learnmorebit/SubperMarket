<template>
  <div class="menu">
    <menu-datail
      :menuDetail="menuList"
      class="menu-datail"
      @getIndex="getindex"
    ></menu-datail>
    <category-detail
      :categoryList="getList"
      :istrue="istrue"
      :categoryDetail="categoryDetail"
    ></category-detail>
  </div>
</template>

<script>
import MenuDatail from "./MenuDatail";

import {
  getCategory,
  getsubcategory,
  getContentDetail,
} from "network/category";
import CategoryDetail from "./CategoryDetail";

export default {
  components: { MenuDatail, CategoryDetail },
  data() {
    return {
      menuList: [], //综合数 据
      categoryList: [], //单独的图片数据
      currindex: 0,
      getList: [],
      categoryDetail: {},
      listType: "pop",
      istrue: true,
    };
  },
  created() {
    getCategory().then((res) => {
      this.menuList = res.data.category.list;

      //初始化categoryList的数据，
      for (let i = 0; i < this.menuList.length; i++) {
        (this.categoryList[i] = {
          subcategories: [],
          categoryDetail: {
            pop: [],
            new: [],
            sell: [],
          },
        }),
          this._getsubcategory(i);
        if (i == this.menuList.length - 1) {
          getsubcategory(0);
          this.categoryDetail = this.categoryList[0].categoryDetail;
          this._getContentDetail(this.menuList[0].miniWallkey, "pop", 0);
          this._getContentDetail(this.menuList[0].miniWallkey, "new", 0);
          this._getContentDetail(this.menuList[0].miniWallkey, "sell", 0);
          this.getList = this.categoryList[0].subcategories;

          // this.getindex(0);
        }
      }
    });
  },

  methods: {
    _getsubcategory(index) {
      getsubcategory(this.menuList[index].maitKey).then((res) => {
        this.categoryList[index].subcategories = res.data.list;
        this._getContentDetail(this.menuList[index].miniWallkey, "pop", index);
        this._getContentDetail(this.menuList[index].miniWallkey, "new", index);
        this._getContentDetail(this.menuList[index].miniWallkey, "sell", index);
      });
    },
    getindex(index) {
      this.istrue = this.currindex == index; //点击换选中框
      this.getList = this.categoryList[index].subcategories; //
      this.categoryDetail = this.categoryList[index].categoryDetail;
    },
    _getContentDetail(key, type, i) {
      getContentDetail(key, type).then((res) => {
        this.categoryList[i].categoryDetail[type] = res;
      });
      this.categoryDetail = this.categoryList[i].categoryDetail;
    },
  },
  computed: {
    getdata() {
      return this.getList;
    },
  },
};
</script>

<style scoped>
.menu-scroll,
.catgory-detail {
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 54px;
  overflow: hidden;
}

.menu-scroll {
  width: 20%;
}
.catgory-detail {
  left: 90px;
}
</style>

