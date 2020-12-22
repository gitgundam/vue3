<template>
  <div class="tabs">
    <Tabs v-model:selected="originTab">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航222">内容22</Tab>
      <Tab title="导航3">内容333</Tab>
      <Tab title="导航4">内容4444</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
  import Tabs from '../lib/Tabs.vue';
  import Tab from '../lib/Tab.vue'
  import {ref} from 'vue'

  export default {
    name: "TabsDoc",
    components:{Tabs,Tab},
    setup(){
      const originTab = ref('导航222')
      return {originTab}
    }

}
</script>

<style scoped lang="scss">
.tabs{

}
</style>