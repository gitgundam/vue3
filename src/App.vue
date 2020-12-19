<template>
  <div>
    <Topnav></Topnav>
    <router-view></router-view>
  </div>

</template>

<script lang="ts">
import Topnav from './components/Topnav.vue';
import {ref,provide} from 'vue'
import {router} from './router';
export default {
  name: 'App',
  components:{Topnav,},
  setup(){
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width <= 500 ? false:true)
    provide('xxx',menuVisible)
    router.afterEach(()=>{
      if(width <= 500){
        menuVisible.value = false
      }

    })
  }
}
</script>
