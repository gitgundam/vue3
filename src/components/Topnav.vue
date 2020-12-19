<template>

  <div class="topnav" >
    <div class="logo" @click="toHome">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gear"></use>
      </svg>
      <svg class="icon-right" aria-hidden="true">
        <use xlink:href="#icon-gear-right"></use>
      </svg>
      <span>H ui </span>
    </div>
    <div class="button" @click="toggleMenu">
      <svg class="icon" aria-hidden="true" >
        <use xlink:href="#icon-caidan"></use>
      </svg>
    </div>
    <ul class="menu">
      <li><a href="https://github.com/gitgundam">Github</a></li>
      <li><a href="https://gitee.com/gitgundam">码云</a></li>
      <li><a href="https://blog.csdn.net/MS6324_ZAKU?spm=1000.2115.3001.5343">相关</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject,Ref} from 'vue'
  export default {
    name: "Topnav",
    methods:{
      toHome(){
        this.$router.push('/')
      }

    },
    setup(){
      const menuVisible = inject<Ref<boolean>>('xxx')
      const toggleMenu = () => {
        menuVisible.value = !menuVisible.value
      }
      return {toggleMenu}
    }
}
</script>

<style scoped lang="scss">
$icon-color: #333;
$font-color: rgb(103 75 228);;

.topnav{
  user-select:none;
  cursor: pointer;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  box-shadow: 0 0 2px rgba(0,0,0,.25);
  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  .button .icon{
    display: none;
    position: absolute;
    top: 5px;
    left: 10px;
    width: 2rem;
    height: 2rem;
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    >li{
      margin: 0 20px;
    }
  }
  @media (max-width: 500px) {
    .menu{display: none}
    .button .icon{display: inline-block;}
  }
}
</style>