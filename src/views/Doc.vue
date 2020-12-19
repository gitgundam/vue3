<template>
  <div class="doc">
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
    <main >
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
  border: 1px solid red;
  display: flex;
  position: relative;
  margin: 10px;
  aside{
    background: antiquewhite;
  }
  main{
    background: #7e7d8e;
    flex: 1;
    height: 100vh;
  }
  @media (max-width: 500px)  {
    aside{
      position: fixed;
      top: 42px;
      left: 0;
      bottom: 0;
    }
  }
}
</style>