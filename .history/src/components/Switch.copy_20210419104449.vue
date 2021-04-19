<demo>
干
</demo>
<template>
  <Switch v-model:value="bool" @click="clean"></Switch>
</template>

<script lang='ts'>
import Switch from "../lib/Switch.vue";
import { ref } from "vue";

export default {
  components: { Switch },
  setup() {
    const bool = ref(true);
    const clean=()=>{
      if(x){
        clearInterval(x)
      }
    }
    //清
    let x = setInterval(() => {
      bool.value = !bool.value;
    }, 1000);

    return { bool , clean};
  },
};
</script>

<style>
</style>