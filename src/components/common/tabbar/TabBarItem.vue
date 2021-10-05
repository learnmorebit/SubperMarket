<template>
  <div class="tab-bar-item" @click="viewChange">
    <div v-if="isActive">
    <slot name="active"></slot>
    </div>
    <div v-else>
    <slot name="notact"></slot>
    </div>
    <div  :style="StyleChange">
      <slot name="text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  props:{
    path:String,
    color:{
      type:String,
      default: "red"
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) != -1 
    },
    StyleChange(){
      return this.isActive ? {color: this.color} : {}
    }
  },
  methods:{
  viewChange(){
    this.$router.push(this.path)
  }
  }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
}
</style>