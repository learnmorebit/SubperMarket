<template>
  <div>
    <nav-bar class="nav-bar" :color="deeppink">
      <div slot="center">我的资料</div>
    </nav-bar>
    <user-info />
    <list-view></list-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import UserInfo from "./childComps/UserInfo";
import ListView from "./childComps/ListView";
export default {
  name: "Profile",
  data() {
    return {
      deeppink: "deeppink",
    };
  },
  components: {
    NavBar,
    UserInfo,
    ListView,
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: #fd6a85;
  color: #fff;
  font-weight: bold;
}
</style>
