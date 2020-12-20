<template>
  <button><span></span></button>
</template>

<script lang="ts">
export default {
  name: 'Switch',
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
  background: #64c365;

  > span {
    background: white;
    border-radius: 50%;
    width: $pen-size;
    height: $pen-size;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: left 250ms;
  }
  &:hover{
    >span{
      left: calc(100% - #{$pen-size} - 2px);
    }
  }
  &:focus{
    list-style: none;
  }
}

</style>