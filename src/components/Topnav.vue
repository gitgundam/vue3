<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gear"></use>
      </svg>
      <svg class="icon-right" aria-hidden="true">
        <use xlink:href="#icon-gear-right"></use>
      </svg>
      <span>H ui </span>
    </div>
    <ul class="menu">
      <li>Github</li>
      <li>码云</li>
      <li>文档</li>
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Topnav",
}
</script>

<style scoped lang="scss">
$icon-color: #333;
$font-color: #3e3c47;
.topnav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 60px;
  box-shadow: 0 0 2px rgba(0,0,0,.25);
  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
  }
  .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    span{
      color: $font-color;
      margin-left: 10px;
      font-weight: 600;
      font-size: 1.5rem;
    }
    .icon{
      @keyframes gear
      {
        from {transform: rotate(0)}
        to {transform: rotate(360deg)}
      }
      animation: gear 3s linear infinite;
      width: 2rem;
      height: 2rem;
      fill: #333;
      z-index: 1;
    }
    .icon-right{
      @keyframes gear-right
      {
        from {transform: rotate(0)}
        to {transform: rotate(-360deg)}
      }
      animation: gear-right 3s linear infinite;
      width: 1.2rem;
      height: 1.2rem;
      position: absolute;
      left: 22px;
      top: 10px;
    }
  }
  .menu{
    @media (max-width: 500px) {
      display: none;
    }
    display: flex;
    align-items: center;
    justify-content: space-around;
    >li{
      margin: 0 20px;
    }
  }
}
</style>