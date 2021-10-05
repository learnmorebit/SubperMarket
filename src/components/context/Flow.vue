<template><div  class="flow">
 <div  v-for="(item,index) in imgInfo" :key="index"  >
   <div  v-if="index==0">
<a :href="item.link">
      <img :src="item.image" alt="" @load="flowLoad">
    </a>
   </div>
    
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
    imgInfo:{
     type:Array,
      default(){
      return []
      }
    }
    },
  
    methods:{
      flowLoad(){
        this.$emit("tabcontrolFixed")
      }
    }
  }
</script>

<style>
.flow{
  width: 100%;
  height: 195px;
  background-color: pink;
  overflow: hidden;
}
.flow img{
  width: 100%;
  height: 100%;
}
</style>