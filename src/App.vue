<template>
  <div>
    <Topnav></Topnav>
    <router-view></router-view>
  </div>

</template>

<script lang="ts">
import Topnav from './components/Topnav.vue';

export default {
  name: 'App',
  components:{
    Topnav
  }
}
</script>
