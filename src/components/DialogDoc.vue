<template>
  <div class="dialog-doc">
    <Button theme="link" level="main" @click="toggle">打开</Button>
      <Dialog v-model:visible="visible"
              :ok="okEvent"
              :cancel="cancelEvent">
        <template v-slot:title>
          <h3>标题</h3>
        </template>
        <template v-slot:content>
          <div>文本1</div>
          <div>文本2</div>
        </template>
      </Dialog>


  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  name: 'DialogDoc',
  components: {Dialog, Button},
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const okEvent = () => {
      return false;
    };
    const cancelEvent = () => {
      return true;
    };
    return {visible, toggle, okEvent, cancelEvent};
  }
};
</script>

<style scoped lang="scss">

</style>