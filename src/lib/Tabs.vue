<template>
  <div class="h-tabs">
    <div v-for="(t,index) in titles" :key="index">{{t}}</div>
    <component v-for="(cop,index) in defaults" :is="cop" :key="index"/>
  </div>
</template>

<script lang="ts">
  import Tab from './Tab.vue';

  export default {
    name: "Tabs",
    setup(props,context){
      const defaults = context.slots.default()
      defaults.forEach((tag)=>{
        if(tag.type !== Tab){
          throw Error('Tabs标签的子元素不能为除Tab标签外的其他元素')
        }
      })
      const titles = defaults.map((tag)=>{
        return tag.props.title
      })
      return {defaults,titles}
    }
}
</script>

<style scoped lang="scss">

</style>