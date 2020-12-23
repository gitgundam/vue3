<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="h-dialog-overlay">
      </div>
      <div class="h-dialog-wrapper">
        <div class="h-dialog">
          <header>
            <slot name="title"></slot>
            <span @click="close" class="h-dialog-close"></span>
          </header>
          <main>
            <slot name="content"></slot>
          </main>
          <footer>
            <Button @click="cancel">Cancel</Button>
            <Button theme="link" level="main" @click="ok">OK</Button>
          </footer>
        </div>
      </div>
    </Teleport >
  </template>

</template>

<script lang="ts">
  import Button from './Button.vue';

  export default {
    name: "Dialog",
    props: {
      visible:{
        type: Boolean,
        default: false
      },
      ok:{
        type: Function,
      },
      cancel:{
        type: Function
      }
    },
    components:{Button},
    setup(props,context){
      const close = () =>{
        context.emit('update:visible',false)
      }
      const ok = ()=>{
        if(props.ok && props.ok() !== false){
          console.log(props.ok );
          close()
        }
      }
      const cancel = ()=>{
        if(props.cancel && props.cancel() !== false){
          close()
        }
      }
      return {close,ok,cancel}
    }
}
</script>

<style lang="scss">
  $radius: 8px;
  $border-color: #c6c6c8;
  .h-dialog{
    background: white;
    border-radius: $radius;
    min-width: 15em;
    max-width: 90%;
    &-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: fade_out(black, 0.5);
      z-index: 1000;
    }
    &-wrapper {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1001;
    }
    >header {
      padding: 12px 16px;
      border-bottom: 1px solid $border-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
    }
    >main {
      padding: 12px 16px;
    }
    >footer {
      border-top: 1px solid $border-color;
      padding: 12px 16px;
      text-align: right;
    }
    &-close {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;
      &::before,
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        background: black;
        width: 100%;
        top: 50%;
        left: 50%;
      }
      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }

  }

</style>