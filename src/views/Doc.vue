<template>
  <div class="doc">
    <Topnav menu class="nav"></Topnav>
    <div class="content">
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
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";

export default {
  name: "Doc",
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("xxx");
    return { menuVisible };
  },
};
</script>

<style scoped lang="scss">
.doc {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
  }
  .content {
    display: flex;
    flex-grow: 1;
    padding-top: 42px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
    > aside {
      flex-shrink: 0;
      position: fixed;
      top: 52px;
      left: 0;
      bottom: 0;
      width: 150px;
      background: white;
      @media (max-width: 500px) {
      top: 42px;
    }
    }
    > main {
      flex-grow: 1;
      padding: 16px;
      overflow: auto;
    }
  }
}
</style>