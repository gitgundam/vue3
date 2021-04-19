<template>
  <button
      class="h-switch"
      @click="toggle"
      :class="{'h-switch-checked': value}">
    <span></span>
  </button>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  name: 'Switch',
  props:{
    value:{
      type: Boolean
    }
  },
  setup(props,context){
    const  checked = ref(false)
    const is
    const toggle =()=>{
      context.emit('update:value',!props.value)
      context.emit('update:clean',)
    }
    return {checked,toggle}
  }
};
</script>

<style scoped lang="scss">
$button-height: 24px;
$pen-size: $button-height - 4px;
.h-switch {
  cursor: pointer;
  height: $button-height;
  width: $button-height * 1.8;
  border: none;
  border-radius: $button-height/2;
  position: relative;
  background:#e9e9ea;
  transition: all 250ms;
  > span {
    background: white;
    border-radius: 50%;
    width: $pen-size;
    height: $pen-size;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: all 250ms;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 2px;
  }
  &.h-switch-checked{
    background: #65c466;
    >span{
      left: calc(100% - #{$pen-size} - 2px);
    }
  }
  &:focus{
    outline: none;
  }
}

</style>