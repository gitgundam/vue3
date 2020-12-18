<template>
  <div class="topnav">
    <div class="logo"> logo</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
      <li>菜单3</li>
      <li>菜单4</li>

    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Topnav",
}
</script>

<style scoped lang="scss">
.topnav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 60px;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  .menu{
    display: flex;
    align-items: center;
    justify-content: space-around;
    >li{
      margin: 0 20px;
    }
  }
}
</style>