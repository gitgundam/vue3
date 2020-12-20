<template>
    <button class="h-button"
            :class="`h-theme-${theme}`">
      <slot></slot>
    </button>

</template>

<script lang="ts">
  export default {
    name: "Button",
    props:{
      theme:{
        type:String,
        default: 'button'
      }
    }
}
</script>

<style scoped lang="scss">
$button-height: 32px;
$background: #eeeeef;
$focus-background: #1c4793;
$color: #3478f6;
$focus-color: #8f8f90;

.h-button{
  font-weight: 600;
  box-sizing: border-box;
  display: inline-flex;
  white-space: nowrap;
  background: $background;
  padding: 0.3em  1.4em;
  cursor: pointer;
  color: $color;
  outline: none;
  border: none;
  border-radius: 2em;
  & + & {
    margin-left: 8px;
  }
  &:hover{
    color:  #1c4793;
    background: $focus-color;
  }
}
</style>