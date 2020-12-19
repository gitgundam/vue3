<template>
  <div class="Doc">
    <div class="topnav">
      <div class="logo"></div>
      <div class="menu"></div>
    </div>
    <div class="content"></div>
    <aside>
      <h2>组件列表</h2>
      <ol>
        <li></li>
        <li>
          <router-link to="/doc/switch"></router-link>
        </li>
        <li>
          <router-link to="/doc/button"></router-link>
        </li>
        <li>
          <router-link to="/doc/dialog"></router-link>
        </li>
        <li>
          <router-link to="/doc/tabs"></router-link>
        </li>
      </ol>
    </aside>
    <main>主内容</main>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Doc",
  }
</script>

<style scoped lang="scss">

</style>