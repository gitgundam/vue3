<template>
  <button @click="toggle"
  :class="{checked}">
    <span></span>
  </button>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  name: 'Switch',
  setup(){
    const  checked = ref(false)
    const toggle =()=>{
      checked.value = !checked.value
    }

    return {checked,toggle}
  }
};
</script>

<style scoped lang="scss">
$button-height: 24px;
$pen-size: $button-height - 4px;
button {
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
  &.checked{
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