<template>
  <div class="home">
    <Topnav class="nav"></Topnav>
    <div class="banner">
      <h1>氢 UI </h1>
      <p class="h2">一套基于Vue 3 的 UI 组件框架</p>
      <p class="actions">
        <a href="https://github.com/gitgundam" class="github">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
    <div class="main">
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <div class="intro">
          <h2>基于Vue3</h2>
          <p>使用了Vue3 Composition API</p>
        </div>
      </div>
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <div class="intro">
          <h2>基于Typescript</h2>
          <p>源代码采用Typescript书写（非常严格）</p>
        </div>
      </div>
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tip"></use>
        </svg>
        <div class="intro">
          <h2>代码易读</h2>
          <p>每个组件的源代码都极其简洁</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';

  export default {
    name: "Home",
    components:{Topnav}

}
</script>

<style scoped lang="scss">
$h1-color: #3e3c47;
$font-intro-color:#9391a2;
$background: linear-gradient(145deg, rgba(237,228,255,1) 49%, rgba(248,245,254,1) 93%);
$button-color:linear-gradient(145deg, rgba(74,116,230,1) 0%, rgba(132,88,233,1) 82%);
$github-button-color: #e6d8fc;
$button-font-color: white;

  .home{
    .main{
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 500px)  {
        flex-direction: column;
      }
      .item{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 500px)  {
          flex-direction: column;
        }
        .intro{
          @media (max-width: 500px)  {
            flex-direction: column;
            padding: 20px 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      .icon{
        width: 100px;
        height: 100px;
      }
    }
    .nav{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }
    .banner{
      margin: 0 auto;
      padding: 100px 0 50px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      background: $background;
      clip-path: ellipse(80% 60% at 50% 40%);
      >h1 {
        @media (max-width: 500px)  {
          font-size: 2rem;
        }
        color: $h1-color;
        font-size: 3rem;
      }
      > p.h2{
        @media (max-width: 500px)  {
          margin: 20px 0;
        }
        font-size: 20px;
        color: $font-intro-color;
        margin: 40px 0;
      }
    }
    .actions{
      >a{
        background: $button-color;
        color: $button-font-color;
        padding: 0.75em 2em;
        margin-right: 20px;
        border-radius: 2em;
      }
      .github{
        color: #7e7d8e;
        background: $github-button-color;
      }
    }
  }
</style>