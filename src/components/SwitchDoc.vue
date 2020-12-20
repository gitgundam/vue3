<template>
  <div class="switch-doc">
    <Switch v-model:value="y" ></Switch>
  </div>
</template>

<script lang="ts">
  import Switch from '../lib/Switch.vue';
  import {ref} from 'vue';

  export default {
    name: "SwitchDoc",
    components:{Switch},
    setup(){
      const y = ref(false)
      return {y}
    }
}
</script>

<style scoped lang="scss">

</style>