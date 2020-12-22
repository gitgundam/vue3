<template>
  <article class="markdown-body" v-html="md">
  </article>
</template>

<script>
import md from '../markdown/use.md'
export default {
  name: 'Use',
  data(){
    return {md}
  }
}
</script>

