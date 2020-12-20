<template>
  <div class="button-doc">
    <h2>示例1</h2>
    <Button>默认</Button>
    <Button theme="button">普通按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文本按钮</Button>
    <h2>示例2</h2>

    <div><Button level="success" theme="text">成功按钮</Button>
      <Button level="normal" theme="text">普通按钮</Button>
      <Button level="danger" theme="text">危险按钮</Button>
      <Button level="main" theme="text">主要按钮</Button>
    </div>
    <h2>示例3</h2>
    <div><Button theme="button" size="big">大的按钮</Button>
      <Button theme="link" size="normal">普通按钮</Button>
      <Button  size="small">小的按钮</Button>
    </div>
    <h2>示例4</h2>
    <div><Button disabled >大的按钮</Button>
    </div>
    <h2>示例5</h2>
    <div><Button loading >大的按钮</Button>

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