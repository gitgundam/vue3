<template>
  <div class="switch-doc">
    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1"></Demo>
  </div>
</template>

<script lang="ts">
import Switch1 from "../components/Switch.copy.vue";
import Demo from "../components/Demo.vue";

export default {
  name: "SwitchDoc",
  components: {
    Demo
  },
  setup() {
    return { Switch1 };
  },
};
</script>

<style scoped lang="scss">

</style>