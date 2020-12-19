<template>
  <div class="doc">
    <div class="content"></div>
    <aside v-if="menuVisible">
      <h2>组件列表</h2>
      <ol>
        <li></li>
        <li>
          <router-link to="/doc/switch">switch</router-link>
        </li>
        <li>
          <router-link to="/doc/button">button</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">dialog</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">tabs</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  name: 'Doc',
  setup() {
    const menuVisible = inject<Ref<boolean>>('xxx');
    return {menuVisible};
  }
};
</script>

<style scoped lang="scss">
.doc {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 60px;
  border: 1px solid red;
}
</style>