<template>
  <div class="button-doc">
    <h2>示例1</h2>
    <Button>默认</Button>
    <Button theme="button">普通按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文本按钮</Button>
    <h2>示例2</h2>
    <h2>示例3</h2>
    <h2>示例4</h2>
    <h2>示例5</h2>
  </div>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue';

  export default {
    name: "ButtonDoc",
    components:{
      Button
    }
}
</script>

<style scoped lang="scss">

</style>