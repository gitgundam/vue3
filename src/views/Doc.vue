<template>
  <div class="doc">
    <Topnav menu class="nav"></Topnav>
    <div class="content">
      <aside :class="{active: menuVisible}">
        <h2>文档</h2>
        <ol>
          <li>
              <router-link to="/doc">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/start">快速上手</router-link>
          </li>
          <li>
            <router-link to="/doc/use">使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">tabs组件</router-link>
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
    z-index: 10;
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
      border-right: 1px solid #e8e8e8;
      width: 150px;
      background: white;
      z-index: 100;
      transition: all 250ms;
      @media (max-width: 500px) {
      top: 42px;
        transform: translateX(-150px);
    }
      &.active{
        transform: translateX(0)
      }
      h2{
        padding: 8px;
      }
      li{
        >a{
          color: #333333;
          padding: 10px 0 10px 20px;
          display: inline-block;
          width: 150px;
          font-size: 14px;
          &:hover{
            background: #ebe4fd;
            border-right: 2px solid #6250dc;
          }
        }

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