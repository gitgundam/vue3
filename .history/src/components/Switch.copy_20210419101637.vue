<demo>
干
</demo>
<template>
  <Switch v-model:value="bool" @update:clean=""></Switch>
</template>

<script lang='ts'>
import Switch from "../lib/Switch.vue";
  import {ref} from 'vue';

export default {
   components:{Switch},
    setup(){
      const bool = ref(true)
      const claen = null
      let x = setInterval(()=>{
      bool.value = !bool.value
    },1000)

    
      return {bool,null}
    }
};
</script>

<style>
</style>