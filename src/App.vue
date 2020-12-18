<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>  <router-link to="/">点击1</router-link>
    <span>||||</span>
    <router-link to="/router">点击2</router-link></div>
  <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
}
</script>
