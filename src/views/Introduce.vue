<template>
  <article class="markdown-body" v-html="md">
  </article>
</template>

<script>
import md from '../markdown/introduce.md'
export default {
  name: 'Introduce',
  data(){
    return {md}
  }
}

</script>

