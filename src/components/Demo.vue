<template>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <component :is="component"></component>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre class="language-html" v-html=" Prism.highlight(
              component.__sourceCode,
              Prism.languages.javascript,
              'javascript'
            )"></pre>
      </div>
    </div>

</template>

<script lang='ts'>
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
const Prism = (window as any).Prism;
import Button from "../lib/Button.vue";
import Switch1 from "../components/Switch.copy.vue";

export default {
  props:{
    component: {
      type: Object
    }
  },
  components: {
    Button
  },
  name: 'Demo',
  setup(props){
        return {Prism,Switch1 };
  }

}
</script>

<style scoped lang="scss">
  $border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>