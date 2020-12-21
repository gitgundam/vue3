<template>
  <div class="Tabs">
    <Tabs>
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2">内容2</Tab>


    </Tabs>
  </div>
</template>

<script lang="ts">
  import Tabs from '../lib/Tabs.vue';
  import Tab from '../lib/Tab.vue';

  export default {
    name: "Tabs",
    components:{Tabs,Tab}
}
</script>

<style scoped lang="scss">

</style>