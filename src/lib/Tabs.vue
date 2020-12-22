<template>
  <div class="h-tabs">
    <div class="h-tabs-nav" ref="container">
      <div v-for="(t,index) in titles"
           :ref="el => { if (t === selected) navItems = el }"
           @click="switchTab(t)"
           :key="index"
           class="h-tabs-nav-item"
           :class="{selected:selected === t}"
          >{{t}}</div>
      <div class="h-tabs-indicator" ref="indicator"></div>
    </div>
    <div class="h-tabs-content">
      <component v-for="(cop,index) in defaults"
                 class="h-tabs-content-item"
                 :class="{selected:cop.props.title === selected}" :is="cop" :key="index"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Tab from './Tab.vue';
  import {ref,watchEffect} from 'vue'

  export default {
    name: "Tabs",
    props:{
      selected:{
        type: String
      }
    },
    setup(props,context) {
      const navItems = ref<HTMLDivElement>(null)
      const indicator =ref<HTMLDivElement>(null)
      const container = ref<HTMLDivElement>(null)

      watchEffect(()=>{
        if(navItems.value &&  indicator.value){
          console.log(navItems.value);
          const {width} = navItems.value.getBoundingClientRect()
          indicator.value.style.width = width + 'px'
          const {left: left1} = container.value.getBoundingClientRect()
          const {left: left2} = navItems.value.getBoundingClientRect()
          const left = left1 - left2
          indicator.value.style.left = -left + 'px'
        }

      })

      const defaults = context.slots.default()
      defaults.forEach((tag) => {
        if (tag.type !== Tab) {
          throw Error('Tabs标签的子元素不能为除Tab标签外的其他元素')
        }
      })
      const titles = defaults.map((tag) => {
        return tag.props.title
      })
      const switchTab = (title: string) => {
        context.emit('update:selected', title)
      }
      return {defaults, titles,navItems,switchTab,indicator,container}
    }
}
</script>

<style  lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

 .h-tabs{
   .h-tabs-nav{
     display: flex;
     color: $color;
     border-bottom: 1px solid $border-color;
     position: relative;
     .h-tabs-nav-item{
       padding: 8px 0;
       margin: 0 16px;
       cursor: pointer;
       position: relative;
       &:hover{
         color: #40a9ff;
       }
       &:first-child {
         margin-left: 0;
       }
       &.selected {
         color: $blue;
       }
     }
   }
   &-content {
     padding: 8px 0;
     &-item{
       display: none;
       &.selected{
         display: block;
       }
     }
   }
 }
.h-tabs-indicator{
  position: absolute;
  top: 37px;
  left: 0;
  height: 3px;
  background: $blue;
  transition: all .25s;
}

</style>